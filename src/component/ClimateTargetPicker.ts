import { LitElement, html, css, property, internalProperty } from 'lit-element';
import { ClimateTempRange } from '../climate/ClimateDeviceManager';

class Picker extends LitElement {
  @property()
  public targetTemp = 0;
  @property()
  public tempRange!: ClimateTempRange;
  @property({ type: Function })
  public onUpdateTargetTemp;
  @internalProperty()
  private selectedTargetTemp = 0;
  private picker!: Element | null | undefined;
  private updateTimer!: NodeJS.Timeout;

  constructor() {
    super();
  }

  render() {
    return html`
      <svg class="climate-card-deg" viewBox="0 0 120 120">
        <path
          stroke-width="1"
          stroke="rgb(49 49 49)"
          stroke-dasharray="2"
          fill="none"
          d="M60 4 a 52 52 0 0 1 0 115 a 52 52 0 0 1 0 -115"
        />
      </svg>
      <div id="circle">
        <div id="picker" style="transform: rotate(150deg);">
          <div id="picker-circle"></div>
          <div id="picker-value">${this.selectedTargetTemp}</div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this._initPicker().then(() => {
      // set picker angle based on current target temperature
      const currentAngle = this.tempToDeg(this.targetTemp);
      this.setPickerAngle(currentAngle);
    });
  }

  /**
   * Converting target temperature to degree
   * @param targetTemp Target temperature
   */
  private tempToDeg(targetTemp): number {
    const section = 255 / this.tempRange.difference;
    const angle = section * (targetTemp - this.tempRange.min);
    let targetAngle = 150;
    if (angle >= 0 && angle <= 30) {
      targetAngle = angle + 150;
    } else if (angle > 30 && angle < 210) {
      targetAngle = -180 + (angle - 30);
    } else if (angle >= 210) {
      targetAngle = angle - 210;
    }
    return targetAngle;
  }

  /**
   * Transform picker angle to 0 to 255 range
   * @param deg picker angel
   */
  private transformPickerAngle(deg): number {
    if (deg <= 180 && deg >= 150) {
      return deg - 150;
    } else if (deg > -180 && deg < 0) {
      return 30 + deg + 180;
    } else if (deg <= 45 && deg >= 0) {
      return 210 + deg;
    }
    return 0;
  }

  private updateDeviceTargetTemp() {
    this.onUpdateTargetTemp(this.selectedTargetTemp)
  }

  private updateTargetTemp(deg): void {
    const angle = this.transformPickerAngle(deg);
    const section = 255 / this.tempRange.difference;
    this.selectedTargetTemp = Math.round(angle / section) + this.tempRange.min;
  }

  private setPickerAngle(deg: number): void {
    this.picker?.setAttribute('style', 'transform: rotate(' + deg + 'deg)');
    this.updateTargetTemp(deg);
  }

  private async _initPicker(): Promise<void> {
    const circle = this.shadowRoot?.querySelector('#circle');
    const _picker = this.shadowRoot?.querySelector('#picker');
    this.picker = _picker
    if (_picker == null || circle == null) return;
    const pickerCircle = _picker.firstElementChild;
    const rect = circle.getBoundingClientRect();

    if (pickerCircle == null) throw new Error('Could not initialize picker');

    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    const transform = (function() {
      const prefs = ['t', 'WebkitT', 'MozT', 'msT', 'OT'],
        style = document.documentElement.style;
      let p;
      for (let i = 0, len = prefs.length; i < len; i++) {
        if ((p = prefs[i] + 'ransform') in style) return p;
      }

      // alert('your browser doesnt support css transforms!');
    })();
    const rotate = function(x, y) {
      const deltaX = x - center.x,
        deltaY = y - center.y,
        angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

      return angle;
    };
    // DRAG
    const mousemove = (event) => {
      const deg = rotate(event.pageX, event.pageY);
      if (deg > 45 && deg < 150) return;
      this.setPickerAngle(deg);
    };
    // DRAGEND
    const mouseup = () => {
      document.removeEventListener('mouseup', mouseup);
      document.removeEventListener('mousemove', mousemove);
      this.picker?.setAttribute('class', '');
      this.updateTimer = setTimeout(()=>this.updateDeviceTargetTemp(), 1000);
    };

    // DRAGSTART
    const mousedown = (event) => {
      event.preventDefault();
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      this.picker?.setAttribute('class', 'active');
      if (this.updateTimer != null) clearTimeout(this.updateTimer);
    };

    // DRAG START
    pickerCircle.addEventListener('mousedown', mousedown);

    // ENABLE STARTING THE DRAG IN THE BLACK CIRCLE
    circle.addEventListener('mousedown', function(event) {
      if (event.target == pickerCircle) mousedown(event);
    });
  }


  static get styles() {
    return css`
      .climate-card-deg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        z-index: 11;
        top: 0px;
      }
      #circle {
        position: relative;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        z-index: 1000;
        top: 5px;
        left: 5px;
      }
      #picker {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 30px;
        margin-top: -15px;
        width: 50%;

        -webkit-transform-origin: center left;
        -moz-transform-origin: center left;
        -ms-transform-origin: center left;
        -o-transform-origin: center left;
        transform-origin: center left;
      }

      #picker-circle {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgb(154 40 40);
        margin: 0px 3px 0px auto;
        cursor: move;
        transition: all 300ms ease-in;
      }

      #picker-circle:hover {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgb(154 40 40);
        margin: 0px 3px 0px auto;
        cursor: move;
        transition: all 300ms ease-in;
      }

      #picker.active #picker-circle {
        background: rgb(255 0 0);
        box-shadow: 0 0 5px 1px red;
      }

      #picker-value {
        position: absolute;
        right: 11px;
        top: -6px;
        font-size: 10px;
        font-family: 'Roboto';
        transform: rotate(80deg);
        transition: all 200ms ease-in;
      }

      #picker.active #picker-value {
        font-size: 14px;
      }
    `;
  }
}

customElements.define('climate-picker', Picker);

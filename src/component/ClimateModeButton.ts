import { LitElement, html, css, property } from 'lit-element';
import { HVAC_MODE } from '../climate/ClimateDeviceManager';

class ClimateModeButton extends LitElement {
  @property({ type: String })
  public icon = '';
  @property({ type: Boolean })
  public isActive = false;
  @property({ type: String })
  public activeColor = '';
  @property({ type: Function })
  public onClick;
  @property()
  public mode: HVAC_MODE = HVAC_MODE.OFF;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class=" ${this.mode}" @click=${this._handleClick}><ha-icon icon="${this.getIcon()}"></ha-icon></div>
    `;
  }
  getIcon(): string {
    if (this.icon !== "") return this.icon;
    switch (this.mode) {
      case 'heat':
        return 'mdi:fire';
      case 'cool':
        return 'mdi:snowflake';
      case 'off':
        return 'mdi:power-standby';
      default:
        return '';
    }
  }

  updated() {}

  private _handleClick(e: MouseEvent) {
    e.stopPropagation();
    if (!this.isActive && typeof this.onClick === 'function') this.onClick(this.mode);
  }

  static get styles() {
    return [
      css`
        :host {
          border-radius: 50%;
          width: 24px;
          height: 24px;
          padding: 6px;
          box-shadow: rgb(0, 0, 0) 0px 0px 4px 0px;
          display: inline-block;
          margin-left: 4px;
          margin-right: 4px;
          cursor: pointer;
        }
        :host([isActive]) {
          box-shadow: rgb(0, 0, 0) 0px 0px 7px -2px;
          cursor: default;
        }
        :host([mode='heat'][isActive]) {
          color: var(--heatColor);
        }
        :host([mode='cool'][isActive]) {
          color: var(--coolColor);
        }
        :host([mode='off'][isActive]) {
          color: var(--offColor);
        }
      `,
    ];
  }
}

customElements.define('climate-mode-button', ClimateModeButton);

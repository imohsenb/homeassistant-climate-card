import { LitElement, html, css, property } from 'lit-element';
import { HVAC_ACTION, HVAC_MODE } from '../climate/ClimateDeviceManager';

class ClimateDisplayStatus extends LitElement {
  @property()
  public hvacMode: HVAC_MODE = HVAC_MODE.OFF;
  @property()
  public hvacAction: HVAC_ACTION = HVAC_ACTION.IDLE;

  constructor() {
    super();
  }

  render() {
    let label = "";
    let icon = "";

    if(this.hvacMode == HVAC_MODE.HEAT){
        label = "WARM"
    } else if(this.hvacMode == HVAC_MODE.COOL){
        label = "COLD"
    }

    if(this.hvacAction == HVAC_ACTION.HEAT){
        label = "HEATING"
        icon = "mdi:fire"
    } else if(this.hvacAction == HVAC_ACTION.COOL){
        label = "COOLING"
        icon = "mdi:snowflake"
    }

    return html`
      <div class="climate-card-data ccd-state ${this.hvacMode}" style=${this.hvacAction == HVAC_ACTION.IDLE?"margin: auto; opacity: 0.5":"vertical-align: text-bottom;"}>
        ${icon !=""?html`<ha-icon icon="${icon}" style="vertical-align: text-bottom;"></ha-icon>`:""}
        ${label}
      </div>
    `;
  }
  static get styles() {
    return [
      css`
      .climate-card-data {
            position: absolute;
            margin: auto;
          }
      .climate-card-data.ccd-state {
        bottom: 21%;
        margin: auto;
        width: 100%;
        font-size: 16px;
        margin-left: -6px;
      }

      .climate-card-data.ccd-state.heat {
        color: var(--heatColor);
      }

      .climate-card-data.ccd-state.cool {
        color: var(--coolColor);
      }

      `,
    ];
  }
}

customElements.define('climate-display-status', ClimateDisplayStatus);

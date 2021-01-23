import { LitElement, html, css, property } from 'lit-element';
import './ClimateTargetPicker'
import './ClimateDisplayStatus'

class ClimateDisplay extends LitElement {

    @property()
    public name = ""
    @property()
    public currentTemp = ""
    @property()
    public humidity = ""
    @property()
    public targetTemp
    @property()
    public tempRange
    @property()
    public hvacMode
    @property()
    public hvacAction
    @property({ type: Function })
    public onUpdateTargetTemp;

    constructor() {
        super()
    }

    render() {
        return html`
        <div class="climate-card-screen ${this.hvacMode} ${this.hvacAction}">
          <div class="climate-card-handle-back"></div>
          <div class="climate-card-handle-shadow"></div>
          <div class="climate-card-handle">
            <div class="climate-card-data ccd-name">${this.name}</div>
            <div class="climate-card-data ccd-temp">${this.currentTemp}<div class="ccd-deg">°</div></div>
            <climate-display-status
              hvacMode=${this.hvacMode}
              hvacAction=${this.hvacAction}
            ></climate-display-status>
            <div class="climate-card-data ccd-humidity">${this.humidity != "undefined"?html`
            <ha-icon icon="mdi:water-percent" style="--mdc-icon-size: 16px; height: 16px; width: 16px; vertical-align: text-top;"></ha-icon>${this.humidity}%
            `:""}</div>
            <climate-picker
              hvacMode=${this.hvacMode}
              targetTemp=${this.targetTemp}
              .tempRange=${this.tempRange}
              .onUpdateTargetTemp=${(temp) => this.onUpdateTargetTemp(temp)}
              ></climate-picker>
          </div>
        </div>
        `
    }

    static get styles() {
      return [
        css`
          .climate-card-screen {
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 80%;
            display: block;
          }
          .climate-card-handle-back {
            background-color: rgb(19, 19, 19);
            border-radius: 100%;
            width: 200px;
            height: 200px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
          }
          .climate-card-handle-shadow {
            border-radius: 100%;
            width: 180px;
            height: 180px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
            margin-top: 1%;
          }
          .climate-card-handle {
            background: rgb(19,19,19);
            /* background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(24,24,24,1) 100%); */
            background: linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(19,19,19,1) 49%, rgb(25 25 25) 50%);
            border-radius: 100%;
            width: 180px;
            height: 180px;
            display: center;
            vertical-align: middle;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            position: absolute;
            text-align: center;
          }
          .climate-card-screen.heating .climate-card-handle-shadow {
            animation: climate-card-heating 3s ease-in;
            animation-iteration-count: infinite;
          }

          .climate-card-screen.heat .climate-card-handle-shadow {
            border: 1px solid rgb(156 115 0 / 20%);
            /* background: #ff9007;
            box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px; */
            background: #ff8f076a;
            box-shadow: rgba(255, 177, 0, 30%) 0px 4px 14px -2px;
          }

          .climate-card-screen.cooling .climate-card-handle-shadow {
            animation: climate-card-cooling 3s ease-in;
            animation-iteration-count: infinite;
          }

          .climate-card-screen.cool .climate-card-handle-shadow {
            border: 1px solid rgb(7 186 255 / 20%);
            /* background: rgb(7 186 255);
            box-shadow: rgb(0 161 255) 0px 4px 14px -2px; */
            background: rgba(7, 186, 255, 30%);
            box-shadow: rgba(0, 161, 255, 30%) 0px 4px 14px -2px;
          }

          .climate-card-data {
            position: absolute;
            margin: auto;
          }

          .climate-card-data.ccd-name {
            color: #cccccc47;
            text-align: center;
            width: 100%;
            font-size: 9px;
            font-family: 'Roboto';
            top: 24px;
          }
          
          .climate-card-data.ccd-temp {
            top: 40%;
            margin: auto;
            color: rgb(204 204 204);
            width: 100%;
            font-size: 56px;
            margin-left: 6px;
          }
          .climate-card-data.ccd-humidity {
            bottom: 8%;
            margin: auto;
            color: rgb(202 202 202 / 62%);
            width: 100%
          }
          .ccd-deg {
            font-size: 30px;
            transform: translateY(-30px);
            display: inline-block;
          }

          @keyframes climate-card-heating {
            0% {
              background: #ff9007;
              box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px;
            }

            60% {
              background: #ff8f076a;
              box-shadow: rgba(255, 177, 0, 30%) 0px 4px 14px -2px;
            }

            100% {
              background: #ff9007;
              box-shadow: rgba(255, 177, 0, 100%) 0px 4px 14px -2px;
            }
          }

          @keyframes climate-card-cooling {
            0% {
              background: rgb(7 186 255);
              box-shadow: rgb(0 161 255) 0px 4px 14px -2px;
            }

            60% {
              background: rgba(7, 186, 255, 30%);
              box-shadow: rgba(0, 161, 255, 30%) 0px 4px 14px -2px;
            }

            100% {
              background: rgb(7 186 255);
              box-shadow: rgb(0 161 255) 0px 4px 14px -2px;
            }
          }
        `,
      ];
    }
}

customElements.define('climate-display', ClimateDisplay);

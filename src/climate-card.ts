/* eslint-disable @typescript-eslint/no-explicit-any */
import cardTheme from './styles'
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; 
import './component/ClimateModeButton'
import './component/ClimateDisplay'
import './editor';

import type { ClimateCardConfig } from './types';
import { CARD_VERSION} from './const';
import { localize } from './localize/localize';
import ClimateDeviceManager from './climate/ClimateDeviceManager'
import {CLIMATE_ATTRS} from './climate/ClimateDeviceManager'

/* eslint no-console: 0 */
console.info(
  `%c  CLIMATE-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'climate-card',
  name: 'Climate Card',
  description: 'A Climate Card to monitor and config climate entity',
});

@customElement('climate-card')
export class ClimateCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('climate-card-editor');
  }

  public static getStubConfig(): object {
    return {};
  }

  @internalProperty() private config!: ClimateCardConfig;
  @property() public hass!: HomeAssistant;

  private deviceManger = new ClimateDeviceManager();

  public setConfig(config: ClimateCardConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Climate',
      ...config,
    };     
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {

    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }

    this.deviceManger.initialize(this.hass, this.config)

    return html`
      ${cardTheme}
      <ha-card>
        <div class="climate-card">
          <climate-display
            name = ${this.deviceManger.getAttr(CLIMATE_ATTRS.NAME)}
            currentTemp = ${this.deviceManger.getAttr(CLIMATE_ATTRS.CURRENT_TEMPERATUE)}
            targetTemp=${this.deviceManger.getAttr(CLIMATE_ATTRS.TEMPERATUE)}
            .tempRange=${this.deviceManger.temperatureRange()}
            humidity = ${this.deviceManger.getAttr(CLIMATE_ATTRS.CURRENT_HUMIDITY)}
            hvacMode=${this.deviceManger.getState()}
            hvacAction=${this.deviceManger.getAttr(CLIMATE_ATTRS.HVAC_ACTION)}
            .onUpdateTargetTemp=${(temp)=>this.deviceManger.setTargetTemp(temp)}
          ></climate-display>
          <div class="climate-card-controls">
          ${
            this.deviceManger.getHvacModes().map(hvacMode => {
              return html`<climate-mode-button 
              mode=${hvacMode}
              ?isActive=${this.deviceManger.isMode(hvacMode)} 
              .onClick=${(mode)=>this.deviceManger.hvacMode(mode)}
            ></climate-mode-button>`
            })
          }
          </div>
        </div>
      </ha-card>
    `;
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  static get styles(): CSSResult {
    return css`
      .climate-card {
        width: 100%;
        height: 280px;
        position: relative;
        font-family: "Oswald" !important;
      }
      
      .climate-card-controls {
        text-align: center;
        width:100%

      }

      .climate-card-control-button {
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

      .climate-card-control-button.active {
          box-shadow: rgb(0, 0, 0) 0px 0px 7px -2px;
          cursor: default;
      }

      .climate-card-control-button-heating.active {
        color: var(--heatColor);
      }

      .climate-card-control-button-cooling.active {
        color: var(--coolColor);
      }
    `;
  }
}

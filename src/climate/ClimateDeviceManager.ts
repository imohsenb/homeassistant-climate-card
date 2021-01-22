import { ClimateCardConfig } from '../types';
import DeviceManager, { DOMAINS } from '../core/DeviceManager';

export enum CLIMATE_ATTRS {
  'CURRENT_TEMPERATUE' = 'current_temperature',
  'CURRENT_HUMIDITY' = 'current_humidity',
  'TEMPERATUE' = 'temperature',
  'NAME' = 'friendly_name',
  'HVAC_ACTION' = 'hvac_action',
  'HVAC_MODES' = 'hvac_modes',
  'MIN_TEMP' = 'min_temp',
  'MAX_TEMP' = 'max_temp',
}

export enum HVAC_MODE {
  'HEAT' = 'heat',
  'COOL' = 'cool',
  'OFF' = 'off',
}

export enum HVAC_ACTION {
  'HEAT' = 'heating',
  'COOL' = 'cooling',
  'IDLE' = 'idle',
}

enum CLIMATE_SERVICES {
  TURN_OFF = 'turn_off',
  SET_HVAC_MODE = 'set_hvac_mode',
  SET_TEMPERATURE = 'set_temperature',
}

class ClimateDeviceManager extends DeviceManager<ClimateCardConfig> {
  private hvacModes = Array<HVAC_MODE>(HVAC_MODE.OFF);

  constructor() {
    super(DOMAINS.CLIMATE);
  }

  protected onInitialzied(): void {
    super.onInitialzied();
    this.hvacModes = Array<HVAC_MODE>(HVAC_MODE.OFF);
    this.getAttr(CLIMATE_ATTRS.HVAC_MODES)
      .sort()
      .forEach(element => {
        if (element != 'off') this.hvacModes.push(element as HVAC_MODE);
      });
    this.hvacModes.reverse();
  }

  public getAttr(attr: CLIMATE_ATTRS): any {
    return super.getAttr(attr);
  }

  public hvacMode(hvacMode: HVAC_MODE): void {
    if (hvacMode === HVAC_MODE.OFF) {
      super.callService(CLIMATE_SERVICES.TURN_OFF);
    } else {
      super.callService(CLIMATE_SERVICES.SET_HVAC_MODE, { hvac_mode: hvacMode });
    }
  }

  public isMode(mode: HVAC_MODE): boolean {
    return super.getState() === mode;
  }

  public isAction(action: HVAC_ACTION): boolean {
    return super.getAttr(CLIMATE_ATTRS.HVAC_ACTION) === action;
  }

  public getHvacModes(): Array<HVAC_MODE> {
    return [...this.hvacModes];
  }

  public setTargetTemp(temperature: number): void {
    this.callService(CLIMATE_SERVICES.SET_TEMPERATURE, { temperature });
  }

  public temperatureRange(): ClimateTempRange {
    const min = super.getAttr(CLIMATE_ATTRS.MIN_TEMP);
    const max = super.getAttr(CLIMATE_ATTRS.MAX_TEMP);
    return {
      difference: max - min,
      min,
      max,
    };
  }
}

export interface ClimateTempRange {
  difference: number;
  min: number;
  max: number;
}

export default ClimateDeviceManager;

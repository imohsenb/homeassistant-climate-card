import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import CardConfig from './CardConfig';

export enum DOMAINS {
  'CLIMATE' = 'climate',
}

abstract class DeviceManager<T extends CardConfig> {
  protected domain!: DOMAINS;
  protected hass!: HomeAssistant;
  protected config!: T;
  protected entity!: HassEntity;

  constructor(domain: DOMAINS) {
    this.domain = domain;
  }

  public initialize(hass: HomeAssistant, config: T): boolean {
    if (config.entity == null) return false;

    this.hass = hass;
    this.config = config;
    this.entity = hass.states[config.entity];

    this.onInitialzied();

    return true;
  }
  protected onInitialzied() {}
  
  public getState(): string {
    return this.entity.state;
  }
  protected getAttr(attr: string): any {
    return this.entity.attributes[attr];
  }

  protected callService(service: string, data = {}) {
    const serviceData = { entity_id: this.entity.entity_id, ...data };
    return this.hass.callService(this.domain, service, serviceData);
  }
}

export default DeviceManager;

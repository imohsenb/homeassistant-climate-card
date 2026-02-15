/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Local Home Assistant helpers
 * Minimal replacements for custom-card-helpers to avoid 77MB dependency bloat
 */

import type { HassEntity } from 'home-assistant-js-websocket';
import type { PropertyValues } from 'lit';

// ============================================================================
// TYPES - Extracted from Home Assistant and custom-card-helpers
// ============================================================================

export interface HomeAssistant {
  auth: any;
  connection: any;
  connected: boolean;
  states: { [entity_id: string]: HassEntity };
  config: any;
  themes: any;
  selectedTheme: any;
  panels: any;
  panelUrl: string;
  language: string;
  selectedLanguage: string | null;
  locale: any;
  localize: (key: string, ...args: any[]) => string;
  translationMetadata: any;
  suspendWhenHidden: boolean;
  enableShortcuts: boolean;
  vibrate: boolean;
  debugConnection: boolean;
  dockedSidebar: 'docked' | 'always_hidden' | 'auto';
  defaultPanel: string;
  moreInfoEntityId: string | null;
  user?: any;
  userData?: any;
  hassUrl(path?): string;
  callService(
    domain: string,
    service: string,
    serviceData?: Record<string, any>,
    target?: any
  ): Promise<any>;
  callApi<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    parameters?: Record<string, any>
  ): Promise<T>;
  fetchWithAuth(path: string, init?: Record<string, any>): Promise<Response>;
  sendWS(msg: Record<string, any>): void;
  callWS<T>(msg: Record<string, any>): Promise<T>;
  loadBackendTranslation(category: string, integration?: string, configFlow?: boolean): Promise<any>;
}

export interface ActionConfig {
  action: 'more-info' | 'toggle' | 'call-service' | 'navigate' | 'url' | 'none';
  entity?: string;
  service?: string;
  service_data?: Record<string, any>;
  data?: Record<string, any>;
  navigation_path?: string;
  url_path?: string;
  confirmation?: any;
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  isPanel?: boolean;
  editMode?: boolean;
  getCardSize(): number | Promise<number>;
  setConfig(config: LovelaceCardConfig): void;
}

export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  lovelace?: any;
  setConfig(config: LovelaceCardConfig): void;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if config or entity has changed
 * Used in shouldUpdate() to determine if component needs re-rendering
 */
export function hasConfigOrEntityChanged(
  element: any,
  changedProps: PropertyValues,
  forceUpdate: boolean
): boolean {
  if (changedProps.has('config') || forceUpdate) {
    return true;
  }

  const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
  if (!oldHass || !element.hass || !element.config) {
    return true;
  }

  // Check if the entity state changed
  if (element.config.entity) {
    return oldHass.states[element.config.entity] !== element.hass.states[element.config.entity];
  }

  // Check if any entity in the config changed
  if (element.config.entities) {
    return element.config.entities.some(
      (entity: string | any) => {
        const entityId = typeof entity === 'string' ? entity : entity.entity;
        return oldHass.states[entityId] !== element.hass.states[entityId];
      }
    );
  }

  return false;
}

/**
 * Get the Lovelace instance
 * Used to access Lovelace API for things like setEditMode
 */
export function getLovelace(): any {
  let root: any = document.querySelector('home-assistant');
  root = root && root.shadowRoot;
  root = root && root.querySelector('home-assistant-main');
  root = root && root.shadowRoot;
  root = root && root.querySelector('app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver');
  root = (root && root.shadowRoot) || root;
  root = root && root.querySelector('ha-panel-lovelace');
  root = root && root.shadowRoot;
  root = root && root.querySelector('hui-root');

  if (root) {
    const ll = root.lovelace;
    ll.current_view = root.___curView;
    return ll;
  }

  return null;
}

/**
 * Fire a custom event
 * Used to communicate changes from editor to the card
 */
export function fireEvent(
  node: HTMLElement,
  type: string,
  detail?: any,
  options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  }
): void {
  const event = new Event(type, {
    bubbles: options?.bubbles ?? true,
    cancelable: options?.cancelable ?? true,
    composed: options?.composed ?? true,
  });

  (event as any).detail = detail;
  node.dispatchEvent(event);
}

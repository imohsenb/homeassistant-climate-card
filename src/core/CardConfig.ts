import { LovelaceCardConfig } from '../ha-helpers';

export default interface CardConfig extends LovelaceCardConfig{
    entity?: string;
}
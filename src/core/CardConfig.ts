import { LovelaceCardConfig } from 'custom-card-helpers';

export default interface CardConfig extends LovelaceCardConfig{
    entity?: string;
}
import { Item, Statistics } from './youtubeAPI.model';

export interface IPropsMetric {
  data: {
    class: string;
    count: string;
    title: string;
  };
}

export interface IPropsButton {
  data: {
    class: string[];
    action: () => void;
    label: string;
    disabled: boolean;
  };
}

export interface IPropsFilter {
  data: {
    type: string;
    title: string;
    label: string;
  };
}

export interface IPropsVideoMetricsComponent {
  data: Statistics;
}

export interface IPropsVideoItemComponent {
  data: Item;
}

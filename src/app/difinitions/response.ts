import { Panorama } from './panorama';

export interface Response {
  count: number;
  items: Array<Panorama>;
  next: string;
  offset: string;
}

import { track } from './track';

export interface topTracks {
  items: track[];
  next: string;
  previous: string;
}

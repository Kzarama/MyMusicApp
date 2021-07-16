export interface topTracks {
  items: Array<{
    name: string;
    album: { images: Array<{ url: string }> };
    artists: Array<{ name: string }>;
  }>;
  next: string;
  previous: string;
}

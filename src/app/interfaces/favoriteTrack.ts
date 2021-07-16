export interface favoriteTrack {
  items: Array<{
    track: {
      name: string;
      album: { images: Array<{ url: string }> };
      artists: Array<{ name: string }>;
    };
  }>;
  next: string;
  previous: string;
}

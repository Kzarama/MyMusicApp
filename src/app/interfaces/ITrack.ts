export interface ITrack {
  name: string;
  album: { images: { url: string }[] };
  artists: { name: string }[];
}

export interface IUser {
  id: string;
  display_name: string;
  images: Array<{
    url: string;
  }>;
}

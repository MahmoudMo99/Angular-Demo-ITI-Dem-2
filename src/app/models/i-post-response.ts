import { IPost } from './i-post';

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

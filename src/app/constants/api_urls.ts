import { environment } from '../../environments/environment.development';

const domain = environment.Domain;

export const API_URLS = {
  getAllPosts: `${domain}posts`,
  getSinglePost: `${domain}posts`,
  addPosts: `${domain}posts/add`,
  deletePost: `${domain}posts`,

  login: `${domain}/auth/login`,
};

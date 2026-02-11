import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../constants/api_urls';
import { IPostResponse } from '../models/i-post-response';
import { IPost } from '../models/i-post';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<IPostResponse> {
    return this.httpClient.get<IPostResponse>(API_URLS.getAllPosts);
  }
  getPostById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`${API_URLS.getSinglePost}/${id}`);
  }
  addPost(post: IPost): Observable<any> {
    return this.httpClient.post<IPost>(API_URLS.addPosts, post);
  }
  deletePost(id: number): Observable<IPost> {
    return this.httpClient.delete<IPost>(`${API_URLS.deletePost}/${id}`);
  }
}

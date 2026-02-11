import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_URLS } from '../constants/api_urls';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private tokenKey: string = 'Token';

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(API_URLS.login, {
        username,
        password,
      })
      .pipe(
        tap((res: any) => {
          localStorage.setItem(this.tokenKey, res.accessToken);
        }),
      );
  }
  saveToken() {}
  getToken() {}
  deleteToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout() {
    this.deleteToken();
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem(this.tokenKey)) {
      return true;
    } else {
      return false;
    }
  }
}

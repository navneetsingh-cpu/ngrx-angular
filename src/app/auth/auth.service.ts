import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./model/user.model";




@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>('/api/authenticate', { username, password });
  }



  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

}

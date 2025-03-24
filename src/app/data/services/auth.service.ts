import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterRes, Token, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)

  baseApiUrl = "http://localhost:8080/api/auth"

  constructor() { }

  login(user: User) {
    return this.http.post<Token>(this.baseApiUrl + "/login", user)
  }

  register(user: User) {
    return this.http.post<RegisterRes>(this.baseApiUrl + "/register", user)
  }
}

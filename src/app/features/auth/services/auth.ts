import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginRequest, LoginResponse } from "../models/auth";
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly API_URL = 'https://collaborate-ook5.onrender.com/api/v1';

  login(credentials: LoginRequest) {
   return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, credentials).pipe(tap({
      next: (res) => {
       
      },
      error(err) {
        console.error(err);
      },
    }))
  }
}
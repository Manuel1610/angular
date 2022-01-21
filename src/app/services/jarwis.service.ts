import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data : any) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data : any) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordReset(data : any) {
    return this.http.post(`${this.baseUrl}/sendPasswordReset`, data)
  }

  changePassword(data : any) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

}

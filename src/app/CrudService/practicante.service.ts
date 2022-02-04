import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class PracticanteService {

  endPoint = 'http://127.0.0.1:8000/api/practicantes'
  constructor(private http:HttpClient,
    private tokenService: TokenService) {
  }
  public getList(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`, {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }
  public getById(id : any): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  public add(data : any): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(id : any, data : any): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public delete(id : any): Observable<any> {
    console.log(`${this.endPoint}/${id}` );
    return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
 }

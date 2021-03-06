import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CuadernoSoporteService {

  endPoint = 'http://127.0.0.1:8000/api/libro';

  constructor(private http: HttpClient,
              private tokenService: TokenService ) {

  }
  public getList(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`, {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }
  public getById(id : any): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`,
    {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }
  public add(data : any): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data,
    {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }
  public update(id : any, data : any): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${id}`, data,
    {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }
  public delete(id : any): Observable<any> {
    console.log(`${this.endPoint}/${id}` );
    return this.http.delete<any>(`${this.endPoint}/${id}`,
    {
      headers:{
        'Authorization': 'Bearer' + this.tokenService.get()
      }
    });
  }


}

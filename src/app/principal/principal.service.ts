import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {


  private apiUrl = 'https://v6.exchangerate-api.com/v6/d39a39e7fdf2aaee7bd7c729/latest/USD';
  private key = 'd39a39e7fdf2aaee7bd7c729';

  constructor(private http: HttpClient) { }

  getSupportedCurrencies(): Observable<any> {
  return this.http.get(`${this.apiUrl}list?access_key=${this.key}`);
}
  }

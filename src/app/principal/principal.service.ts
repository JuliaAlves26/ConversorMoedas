import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/';
  private key = 'd39a39e7fdf2aaee7bd7c729';

  constructor(private http: HttpClient) {}

  getExchangeRate(origem: string, destino: string, valor: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/pair/${origem}/${destino}/${valor}`);
  }

  MoedasNomes(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/codes`);
  }

  getCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/currencies`);
  }

  NomeCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/currencies`);
  }
}

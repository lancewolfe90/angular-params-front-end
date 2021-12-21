import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8082/api/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
  
  getStocks(): Observable<any> {
    return this.http.get(apiUrl);
  }

  getStock(id: number): Observable<any> {
    return this.http.get(apiUrl + `/${id}`);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(apiUrl + `/${id}`);
  }
}

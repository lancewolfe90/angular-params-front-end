import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';

const apiUrl = 'http://localhost:8082/api/stocks';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<any> {
    return this.http.get(apiUrl);
  }

  getStock(id: number): Observable<any> {
    return this.http.get(apiUrl + `/${id}`);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(apiUrl + `/${id}`);
  }

  addStock(stock: Stock): Observable<any> {
    return this.http.post(apiUrl, stock);
  }

  updateStock(stock: Stock): Observable<any> {
    return this.http.put(apiUrl + `/${stock.id}`, stock);
  }
}

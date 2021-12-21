import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe(payload => {
      this.stocks = payload;
    });
  }
}

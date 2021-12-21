import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Stock = {
    name: '',
    symbol: '',
    currentPrice: 0,
    id: 0
  };

  constructor(private route: ActivatedRoute, private stockService: StockService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const stockId = params['id'];
      this.stockService.getStock(stockId).subscribe(payload => {
        this.stock = payload;
      });
    });
  }

  deleteStock(id: number) {
    // Eventually prompt user to confirm BEFORE actually deleting
    this.stockService.deleteStock(id).subscribe();
  }
}

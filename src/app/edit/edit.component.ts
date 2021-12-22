import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  stock: Stock = {
    name: '',
    symbol: '',
    currentPrice: 0,
    id: 0,
  };

  nameTouched: boolean = false;
  symbolTouched: boolean = false;
  priceTouched: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.stock.id = params['id'];
    });
    this.stockService.getStock(this.stock.id).subscribe((payload) => {
      this.stock.name = payload.name;
      this.stock.symbol = payload.symbol;
      this.stock.currentPrice = payload.currentPrice;
    });
  }

  toggleName() {
    this.nameTouched = !this.nameTouched;
  }

  toggleSymbol() {
    this.symbolTouched = !this.symbolTouched;
  }

  togglePrice() {
    this.priceTouched = !this.priceTouched;
  }

  editStock(stock: Stock) {
    this.stockService.updateStock(stock).subscribe();
  }
}

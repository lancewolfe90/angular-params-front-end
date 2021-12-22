import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  newStock: Stock = {
    name: '',
    symbol: '',
    currentPrice: 0,
    id: 0,
  };

  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  onSubmit(formValues: NgForm) {
    // this.newStock.name = formValues.value.name;
    // this.newStock.symbol = formValues.value.symbol;
    // this.newStock.currentPrice = formValues.value.currentPrice;
    this.stockService.addStock(this.newStock).subscribe();
  }
}

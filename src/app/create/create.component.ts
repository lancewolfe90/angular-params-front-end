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

  onSubmit() {
    this.stockService.addStock(this.newStock).subscribe();
  }
}

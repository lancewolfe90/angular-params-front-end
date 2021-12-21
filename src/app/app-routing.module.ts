import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '', component: StocksListComponent },
  { path: 'stocks/:id', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

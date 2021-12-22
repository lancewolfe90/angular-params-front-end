import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StockComponent } from './stock/stock.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: StocksListComponent },
  { path: 'stocks/:id', component: StockComponent },
  { path: 'create', component: CreateComponent },
  { path: 'stocks/:id/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

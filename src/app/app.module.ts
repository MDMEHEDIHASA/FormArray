import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

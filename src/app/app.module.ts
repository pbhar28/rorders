import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HandleGuestOrdersComponent } from './handle-guest-orders/handle-guest-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HandleGuestOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HandleGuestOrdersComponent]
})
export class AppModule { }

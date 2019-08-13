import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http: HttpClient) { }

  private _url = 'https://rewardr.in/wp-json/wc/v3/orders?consumer_key=ck_5a2e407a2feb83a21cfc71f34f2039cb865cd235&consumer_secret=cs_315fc9c098f10c13402691b195c2b820aee4d6d3';

  getOrders(){
    return this.http.get(this._url);
  }
}

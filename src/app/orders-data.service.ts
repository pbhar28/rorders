import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http: HttpClient) { }

  private _key = 'ck_5a2e407a2feb83a21cfc71f34f2039cb865cd235';
  private _secret = 'cs_315fc9c098f10c13402691b195c2b820aee4d6d3'
  private _url = `https://rewardr.in/wp-json/wc/v3/orders`;

  getOrders(){
    let listOrdersUrl = `${this._url}?consumer_key=${this._key}&consumer_secret=${this._secret}`
    return this.http.get(listOrdersUrl);
  }

  updateOrder(orderId){
    let updateOrderUrl = `${this._url}/${orderId}?consumer_key=${this._key}&consumer_secret=${this._secret}`;

    const request = {
      'status': 'completed'
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.put(updateOrderUrl, request, httpOptions);
  }
}

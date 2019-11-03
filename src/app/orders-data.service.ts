import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http: HttpClient) { }

  private _key = 'ck_3e9b24c63bee47c3dbf427af4a11d673018353ee';
  private _secret = 'cs_681eef8fae7fcdb5b9811fb444109a83a508e835';
  private _url = 'https://stores.rewardr.in/wp-json/wc/v3/orders';

  getOrders(){
    let listOrdersUrl = `${this._url}?consumer_key=${this._key}&consumer_secret=${this._secret}`
    return this.http.get(listOrdersUrl);
  }

  updateOrder(orderId, request) {
    let updateOrderUrl = `${this._url}/${orderId}?consumer_key=${this._key}&consumer_secret=${this._secret}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.put(updateOrderUrl, request, httpOptions);
  }
}

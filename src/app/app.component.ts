import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from './orders-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rewardr - Orders';
  orderTilesData = [];

  constructor(private ordersDataService: OrdersDataService) { }

  ngOnInit() {
    this.fetchOrderDetails();
  }

  fetchOrderDetails() {
    this.ordersDataService.getOrders().subscribe((response) => this.populateOrderTiles(response));
  }

  calculateOrderTime(status, respDateCreated) {
    if (status != 'completed') {
      respDateCreated = `${respDateCreated}+00:00`;//+05:30
      let dateCreated = <any>new Date(Date.parse(respDateCreated));
      let currentDate = <any>new Date();
      let diff = parseInt(<any>((currentDate - dateCreated)/60000));
      //console.log(diff);
  
      if(diff < 10) return 'normal'
      else if (diff >= 10 && diff < 15) return 'on-time'
      else return 'delayed';
    } else return 'completed';
  }

  populateOrderTiles(ordersData) {
    //status
    console.log(ordersData);
    ordersData = ordersData.filter(order => order.status != 'cancelled').sort(function(a, b){
      let x = a.status;
      let y = b.status;
      if (x === 'processing' && y === 'completed') return -1;
      if (x === 'completed' && y === 'processing') return 1;
      return 0;
    }).map(order => {
      let customStatus = this.calculateOrderTime(order.status, order.date_created);
      return { customStatus, ...order }
    });
    
    //date_created "2019-08-26T14:01:35"

    if (ordersData.length > 8) {
      ordersData.splice(ordersData.length - 2 , 2);
    }
    console.log(ordersData);
    this.orderTilesData = ordersData;
  }

  updateOrder(orderNo){
    this.ordersDataService.updateOrder(orderNo, {'status': 'completed'}).subscribe((data: any) => {
      this.fetchOrderDetails();
      console.log('update order - success!');
      console.log(data);
    });
  }


}

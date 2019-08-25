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

  populateOrderTiles(ordersData) {
    //status
    console.log(ordersData);
    ordersData = ordersData.filter(order => order.status != 'cancelled').sort(function(a, b){
      let x = a.status;
      let y = b.status;
      if (x === 'processing' && y === 'completed') {return -1;}
      if (x === 'completed' && y === 'processing') {return 1;}
      return 0;
    });;
    console.log(ordersData);
    this.orderTilesData = ordersData;
  }

  updateOrder(orderNo){
    this.ordersDataService.updateOrder(orderNo).subscribe((data: any) => {
      this.fetchOrderDetails();
      console.log('update order - success!');
      console.log(data);
    });
  }


}

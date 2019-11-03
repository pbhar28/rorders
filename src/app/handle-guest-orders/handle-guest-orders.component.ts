import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from '../orders-data.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-handle-guest-orders',
  templateUrl: './handle-guest-orders.component.html',
  styleUrls: ['./handle-guest-orders.component.scss']
})

export class HandleGuestOrdersComponent implements OnInit {
  private _customersList: any;
  constructor(
    private ordersDataService: OrdersDataService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customersList => {
      this._customersList = customersList;
      console.log(this._customersList);
      this.fetchOrderDetails();
    })  
  }

  fetchOrderDetails() {
    this.ordersDataService.getOrders().subscribe((response) => this.populateOrderTiles(response));
  }

  populateOrderTiles(ordersData) {
    //status
    //console.log(ordersData);
    ordersData = ordersData.forEach(order => {
      //console.log(order);
      let orderEmail;
      if (order.customer_id === 0) {
        orderEmail = order.billing.email;

        this._customersList.forEach(customer => {
          let customerEmail;
          if (customer.email === orderEmail) {
            order.customer_id = customer.id;      
            let OrderId = order.id;
            this.ordersDataService.updateOrder(OrderId, {'customer_id': customer.id}).subscribe(data => {
              console.log('update order - success!');
              console.log(data);
            });
            return true;
          }
        })
        console.log(order);
      }
      
    });
    
  }

}

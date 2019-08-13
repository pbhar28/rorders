import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from './orders-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orders';

  constructor(private ordersDataService: OrdersDataService) { }

  ngOnInit() {
    this.ordersDataService.getOrders().subscribe((data: any) => {
      console.log(data);
    });
  }


}

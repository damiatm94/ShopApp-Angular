import { Component, OnInit } from '@angular/core';
import { Order } from './order.model';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private readonly CREATED_ORDERS_TITLE = 'ORDERS IN PROGRESS';
  private readonly ORDERS_HISTORY_TITLE = 'ORDERS HISTORY';
  private firstButtonText = 'Show details';
  private secondButtonText = 'Set as done';

  //TODO use virtual scroll to display orders lists
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  private createNewOrder() {
    const dummyId = Math.floor(Math.random() * 1000).toString();
    const dummyProducts = [
      {
        id: 'id_A',
        name: 'name_A',
        type: 'type_A',
        quantity: 10,
        price: 21.99
      },
      {
        id: 'id_B',
        name: 'name_B',
        type: 'type_B',
        quantity: 20,
        price: 11.29
      },
      {
        id: 'id_C',
        name: 'name_C',
        type: 'type_C',
        quantity: 30,
        price: 31.39
      },
      {
        id: 'id_D',
        name: 'name_D',
        type: 'type_D',
        quantity: 76,
        price: 499.00
      }
    ];

    this.ordersService.createNewOrder({
      id: dummyId,
      customTitle: 'Custom Title',
      products: dummyProducts,
      date: new Date(),
      isOrderMade: false
    });
  }

  private confirmOrderArrival(order: Order) {
    console.log('confirmOrderArrival:', order);
    this.ordersService.moveToOrdersHistory(order);
  }

  private showDetailsPanel(order: Order) {

  }

}

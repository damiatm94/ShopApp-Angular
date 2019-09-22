import { Component, OnInit } from '@angular/core';
import { Order } from './order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private createdOrders: Order[] = [];
  private ordersHistory: Order[] = [];

  constructor() { }

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

    this.createdOrders.push({
        id: dummyId,
        products: dummyProducts,
        date: new Date(),
        isOrderMade: false
      });
  }

  private removeFromCreatedOrders(orderId: string) {
      this.createdOrders = this.createdOrders.filter(elem => elem.id !== orderId);
      console.log('this.createdOrders', this.createdOrders);
  }

  private moveToOrdersHistory(order: Order) {
    this.ordersHistory.push(order);
    this.removeFromCreatedOrders(order.id);
    console.log('Moved to history:', order);
  }

}

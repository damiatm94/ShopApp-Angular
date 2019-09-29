import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../orders/order.model';
import { Product } from '../products/product.interface';
import { ActionElementsType } from './action-elements-type';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})
export class ElementsListComponent implements OnInit {
  @Input('listTitle') listTitle: string;
  @Input('actionElementsType') actionElementsType: ActionElementsType;
  @Input('elementsList') elementsList: Order[] | Product[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  private isOrderElement(element: any): boolean {
    return !!element.date && !!element.customTitle;
  }

  private getOrderDate(order: Order): string {
    const date = order.date.getDate()
      + '/'
      + order.date.getMonth().toLocaleString(undefined, { minimumIntegerDigits: 2 })
      + '/'
      + order.date.getFullYear();

    const time = order.date.getUTCHours()
      + ':'
      + order.date.getUTCMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })
      + ':'
      + order.date.getUTCSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 });

    return `${date}  ${time}`;
  }

  private getElementTitle(element): string {
    let title = '';
    if (this.isOrderElement(element)) {
      title = `${this.getOrderDate(element)}  ${element.id}  ${element.customTitle}`;
    } else {
      title = `${element.id} - ${element.name} - ${element.type} - ${element.quantity} - ${element.price}`;
    }
    return title;
  }

  private confirmOrderArrival(order: Order) {
    this.ordersService.moveToOrdersHistory(order);
  }

  private showDetailsPanel(order: Order) {
  }

  private increaseAmount() {

  }

  private decreaseAmount() {

  }

}

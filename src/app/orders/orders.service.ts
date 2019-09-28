import { Order } from './order.model';
import { ProductsService } from '../products/services/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
    private createdOrders: Order[] = [];
    private ordersHistory: Order[] = [];

    constructor(private productsService: ProductsService) {

    }

    public createNewOrder(order: Order) {
        this.createdOrders.unshift(order);
    }

    public removeCreatedOrder(orderId: string) {
        this.createdOrders = this.createdOrders.filter(elem => elem.id !== orderId);
    }

    public getCreatedOrders(): Order[] {
        return this.createdOrders;
    }

    public getOrdersHistory(): Order[] {
        return this.ordersHistory;
    }


    public moveToOrdersHistory(order: Order) {
        this.ordersHistory.push(order);
        order.products.forEach(product => {
            this.productsService.addProduct(product);
        });
        this.removeCreatedOrder(order.id);
    }
}
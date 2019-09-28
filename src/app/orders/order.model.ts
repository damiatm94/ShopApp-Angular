import { Product } from '../products/product.interface';

export class Order {
    id: string;
    customTitle: string;
    products: Product[];
    date: Date;
    isOrderMade: boolean;
}
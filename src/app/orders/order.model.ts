import { Product } from '../products/product.interface';

export class Order {
    id: string;
    products: Product[];
    date: Date;
    isOrderMade: boolean;
}
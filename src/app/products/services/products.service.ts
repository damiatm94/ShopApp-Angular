import { Product } from '../product.interface';

export class ProductsService {
    private productsCollection: Product[] = [];

    public addProduct(product: Product) {
        let isProductAlreadyExisting = false;

        this.productsCollection.forEach(elem => {
            if (elem.id === product.id) {
                isProductAlreadyExisting = true;
                elem.quantity++;
            }
        });
        if (!isProductAlreadyExisting) {
            this.productsCollection.push(product);
        }
    }

    public decreaseProductQuantity(productId: string) {
        this.productsCollection.forEach(elem => {
            if (elem.id === productId && elem.quantity > 0) {
                elem.quantity--;
            }
        });
    }

    public removeProduct(productId: string) {
        this.productsCollection = this.productsCollection.filter(elem => elem.id !== productId);
    }

    public changePrice(product: Product, newPrice: number) {
        this.productsCollection.map(elem => {
            if (elem.id !== product.id) return;
            return elem.price = newPrice;
        });
    }

    public getProductById(productId: string): Product {
        for (const product of this.productsCollection) {
            if (product.id === productId) return product;
        }
    }

    public getAllProducts(): Product[] {
        return this.productsCollection;
    }
}
import { ProductsService } from './products.service';
import { Product } from '../product.interface';

describe('ProductsService', () => {
    let service: ProductsService;
    let productA: Product = {
        id: 'id_A',
        name: 'name_A',
        type: 'type_A',
        quantity: 10,
        price: 21.99
    };
    let productB: Product = {
        id: 'id_B',
        name: 'name_B',
        type: 'type_B',
        quantity: 20,
        price: 11.29
    };
    let productC = {
        id: 'id_C',
        name: 'name_C',
        type: 'type_C',
        quantity: 30,
        price: 31.39
    };
    let productD = {
        id: 'id_D',
        name: 'name_D',
        type: 'type_D',
        quantity: 76,
        price: 499.00
    };

    beforeEach(() => {
        service = new ProductsService();
        createProductsCollection();
    });

    it('should initially have 3 products', () => {
        expect(service.getAllProducts().length).toEqual(3);
    })

    it('should get product with specified id', () => {
        expect(service.getProductById('id_C')).toEqual(productC);
    })

    it('should add product with specific id', () => {
        service.addProduct(productD);
        expect(service.getAllProducts().length).toEqual(4);
        expect(service.getAllProducts()[3].id).toEqual(productD.id);
    });

    it('should increase the quantity of product with specific id', () => {
        service.addProduct(productA);
        expect(service.getAllProducts().length).toEqual(3);
        expect(service.getAllProducts()[0].quantity).toEqual(11);
    });

    it('should remove product with specific id', () => {
        service.removeProduct(productB.id);

        expect(service.getAllProducts().length).toEqual(2);
        expect(service.getAllProducts()[0].id).toEqual(productA.id);
        expect(service.getAllProducts()[1].id).toEqual(productC.id);
    });

    it('should decrease the quantity of products with specific id', () => {
        service.decreaseProductQuantity(productA.id);
        expect(service.getAllProducts()[0].quantity).toEqual(9);
    });

    it('should change product price', () => {
        const price = 999.99;
        service.changePrice(productB, price);

        expect(service.getAllProducts()[0].price).not.toEqual(price);
        expect(service.getAllProducts()[1].price).toEqual(price);
    });

    function createProductsCollection() {
        service.addProduct(Object.assign({}, productA));
        service.addProduct(Object.assign({}, productB));
        service.addProduct(Object.assign({}, productC));
    }
});

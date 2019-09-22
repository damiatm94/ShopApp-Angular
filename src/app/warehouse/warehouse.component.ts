import { Product } from './../products/product.interface';
import { ProductsService } from './../products/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  private readonly MESSAGE_NO_PRODUCTS = 'You have no products. Go to Orders tab and create new order.';
  private availableProducts: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.availableProducts = this.productsService.getAllProducts();
  }

}

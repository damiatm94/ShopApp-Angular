import { Product } from './../products/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  private readonly FIRST_BUTTON_TEXT = '-';
  private readonly SECOND_BUTTON_TEXT = '+';

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
  }

  private sell() {
    console.log('sell');

  }

  private increaseAmount(product: Product) {
    console.log('increaseAmount:', product);
  }

  private decreaseAmount(product: Product) {
    console.log('decreaseAmount:', product);
  }

}

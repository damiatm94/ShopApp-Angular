import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
  }

  private increaseAmount() {

  }

  private decreaseAmount() {

  }

  private sell() {

  }

}

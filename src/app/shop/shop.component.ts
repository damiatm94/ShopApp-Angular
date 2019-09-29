import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/product.interface';
import { ActionElementsType } from '../elements-list/action-elements-type';

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

  private sell() {

  }

}

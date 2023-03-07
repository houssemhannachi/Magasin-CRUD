import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {ProductService} from "../_services/product.service";

@Injectable({
  providedIn: 'root'
})
export class ItemListResolver implements Resolve<any> {

  constructor(private productService:ProductService) { }

  resolve() {
    return this.productService.getAllProducts();
  }

}

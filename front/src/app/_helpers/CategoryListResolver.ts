import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {ProductService} from "../_services/product.service";
import {CategoryService} from "../_services/category.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryListResolver implements Resolve<any> {

  constructor(private categoryService:CategoryService) { }

  resolve() {
    return this.categoryService.getAllCategories();
  }

}

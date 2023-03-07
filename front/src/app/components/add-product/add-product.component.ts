import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../_models/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../_services/category.service";
import {ProductService} from "../../_services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories$!: Observable<Category[]>;

  message?: string;



  productForm = new FormGroup({
    titre: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    category: new FormControl(),
    qteStock: new FormControl(null, [Validators.required]),
    prix: new FormControl('', [Validators.required, Validators.min(0.001)]),
    photo:new FormControl(null)
  });


  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {
  }

  get priceControl() {
    return this.productForm.value.prix;
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  saveProduct(): void {
    this.productService.createProduct(this.productForm.value).subscribe(
      (res) => {

        this.router.navigate(['/products'])
      }
    );
  }
  setPhoto($event: any) {
    const photo = {id : $event}
    this.productForm.patchValue({photo:photo})

  }
}

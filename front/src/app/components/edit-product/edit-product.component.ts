import {Component, OnInit} from '@angular/core';
import {Category} from 'src/app/_models/Category';
import {Product} from "../../_models/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../_services/category.service";
import {ProductService} from "../../_services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id!: number;
  product: Product = new Product();
  categories!: Category[];
  errorMessage!: string;
  productForm: FormGroup = new FormGroup({
    titre: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null),
    qteStock: new FormControl(null, [Validators.required]),
    prix: new FormControl(null, [Validators.required]),
    photo: new FormControl(null)
  });

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.productForm.patchValue({titre: data.titre})
      this.productForm.patchValue({description: data.description})
      this.productForm.patchValue({category: data.category})
      this.productForm.patchValue({qteStock: data.qteStock})
      this.productForm.patchValue({prix: data.prix})
      this.productForm.patchValue({photo: data.photo})
    }, error => {
      this.errorMessage = error.error;
      console.log(error.error)
    })
  }

  compareCategoryById(option: Category, model: Category): boolean {
    return option && model && option.idCategory === model.idCategory;
  }

  onSubmit() {
    this.productService.updateProduct({idProduit: this.id, ...this.productForm.value}).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }
}

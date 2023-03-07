import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../_services/category.service";
import {Router} from "@angular/router";
import {Category} from "../../_models/Category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  errorMessage?: any;
  categoryForm = new FormGroup({
    titre: new FormControl(null, [Validators.required]),
  });

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCategory() {
    let category = new Category();
    category.titre = this.categoryForm.value.titre;


    this.categoryService.addCategory(category).subscribe(
      (res) => {
        this.router.navigate(['/category'])
      }, error => {
        this.errorMessage = error.error;
      })

    ;
  }
}

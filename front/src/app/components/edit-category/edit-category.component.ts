import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../_services/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id!: number;

  categoryForm = new FormGroup({
    titre: new FormControl(null, [Validators.required]),
  });

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data => {
      this.categoryForm.patchValue({titre: data.titre})

    })
  }

  onSubmit() {
    this.categoryService.updateCategory({idCategory: this.id, ...this.categoryForm.value}).subscribe(() => {
      this.router.navigate(['/category']);
    })
  }

}

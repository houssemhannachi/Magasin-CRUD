import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../_services/category.service";
import {Category} from "../../_models/Category";
import Swal from "sweetalert2";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  dataSource!: MatTableDataSource<Category>;
  displayedColumns: string[] = ['id', 'titre', 'cc'];
  categories: any;

  constructor(private route: ActivatedRoute,private categoryService: CategoryService) {
    this.dataSource = new MatTableDataSource()

  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  onDelete(category: Category) {

    Swal.fire({
      title: 'Supprimer',
      text: 'Voulez-vous supprimer cette catégorie?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      confirmButtonColor: '#006400',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#8B0000'
    }).then((result) => {
      if (result.value) {
        this.categoryService.deleteCategoryById(category.idCategory).subscribe(
          result => {
            this.getAllCategoriesBack();

            Swal.fire({
              title: 'Supprimé!',
              text: 'Cette catégorie a été supprimée avec succés.',
              icon: 'success',
              confirmButtonColor: '#000000',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
          },
          error => {

            Swal.fire({
              title: 'Supprimé!',
              text: 'On peut pas supprimé cette catégorie.',
              icon: 'error',
              confirmButtonColor: '#000000',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
          }
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }

  getAllCategories() {
    this.categories = this.route.snapshot.data.category;
    this.dataSource.data = this.categories;
  }


  getAllCategoriesBack() {
    this.categoryService.getAllCategories().subscribe(data=>{
      this.dataSource.data=data;
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {Product} from "../../_models/Product";
import {ProductService} from "../../_services/product.service";
import Swal from "sweetalert2";
import {isProductInStock} from "../../_utils/helper-functions";
import {FileUploadService} from "../../_services/file-upload.service";
import {MatTableDataSource} from "@angular/material/table";
import {CategoryService} from "../../_services/category.service";
import {Category} from "../../_models/Category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products!: Product[];
  inStock!: boolean;
  dataSource!: MatTableDataSource<Product>;
  displayedColumns: string[] = ['stock', 'image', 'titre', 'pu', 'categorie', 'cc'];
  categories?: Category[];


  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private uploadService: FileUploadService, private productService: ProductService) {
    this.dataSource = new MatTableDataSource()
  }


  getAllProducts() {
    this.products = this.route.snapshot.data.product;
    this.dataSource.data = this.products;
    this.getImages();
    this.getStock();


  }

  getStock() {
    this.dataSource.data.map(p => {
      this.inStock = isProductInStock(p.qteStock);
      p.state = isProductInStock(p.qteStock) ? "check_circle" : "remove_circle"
    });
  }

  getImages() {
    this.dataSource.data.forEach((p) => {
      this.uploadService.getImage(p.photo.id).subscribe(file => {
          p.photo = file;
        }
      )
    })
  }

  getAllProductsBack() {
    this.productService.getAllProducts().subscribe(data => {
      this.dataSource.data = data
    })
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }


  onDelete(product: Product) {

    Swal.fire({
      title: 'Supprimer',
      text: 'Voulez-vous supprimer ce produit?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      confirmButtonColor: '#006400',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#8B0000'
    }).then((result) => {
      if (result.value) {
        this.productService.deleteProductById(product.idProduit).subscribe(
          result => {
            this.getAllProductsBack();

            Swal.fire({
              title: 'Supprimé!',
              text: 'Ce produit a été supprimé.',
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
              text: 'No way.',
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

  filter(value: any) {
    this.productService.getProductsByCategory(value.idCategory).subscribe((data) => {
        this.dataSource.data = data;
        this.getImages();
        this.getStock();
      }
    )

  }


  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe((data) =>
      this.categories = data
    )

  }
}

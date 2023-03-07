import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../_models/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../_services/category.service";
import {ProductService} from "../../_services/product.service";
import {Router} from "@angular/router";
import {ClientService} from "../../_services/client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  categories$!: Observable<Category[]>;

  message?: string;



  clientForm = new FormGroup({
    nomClient: new FormControl(null, [Validators.required]),
  });


  constructor(private clientService:ClientService, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addClient(): void {
    this.clientService.addClient(this.clientForm.value).subscribe(
      () => {

        this.router.navigate(['/clients'])
      }
    );
  }

}

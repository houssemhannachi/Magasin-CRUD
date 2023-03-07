import {Component, OnInit} from '@angular/core';
import {CommandeLine} from "../../_models/CommandeLine";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../_services/product.service";
import {Product} from "../../_models/Product";
import {Router} from "@angular/router";
import {CommandeService} from "../../_services/commande.service";
import {ClientService} from "../../_services/client.service";

class itemObject {
  itemNo: any;
  unitPrice: number = 0;
  quantity: number = 0;
  total: number = 0;

}

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  commandeForm: FormGroup;
  products?: Product[];
  itemsArray: Array<CommandeLine> = [];
  product: any;
  clients: any;

  constructor(private clientService: ClientService, private fb: FormBuilder, private productService: ProductService, private commandeService: CommandeService, private router: Router) {
    this.commandeForm = this.fb.group({
      orderLineList: this.fb.array([]),
      client: new FormControl(null),
      dateCommande: new FormControl(null, Validators.required),
      prixTotal: new FormControl(null)
    });


  }

  get orderLineList() {
    return this.commandeForm.controls["orderLineList"] as FormArray;
  }

  addInput() {
    const orderLineList = this.fb.group({
      product: new FormControl(),
      productPrix: new FormControl(0),
      quantity: new FormControl(0),
      amount: new FormControl(0)
    })

    this.orderLineList.push(orderLineList);
  }

  removeInput(index: number) {
    this.orderLineList.removeAt(index);
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data
      });

    this.getClients()
  }


  getFormArray(): FormArray {
    return this.commandeForm.get('orderLineList') as FormArray
  }

  getFormControl(i: number): FormControl {
    return this.getFormArray().at(i) as FormControl;
  }


  onSelectChange(i: number) {
    const controlToSet = this.getFormArray();
    const controlToGet = this.getFormControl(i);
    controlToSet.controls[i].patchValue({productPrix: controlToGet.value.product.prix})
    controlToSet.controls[i].patchValue({amount: controlToGet.value.quantity * controlToGet.value.product.prix})
    this.calculPrixTotal()
  }

  calculPrixTotal() {
    let amount = 0;
    let orderLineList: CommandeLine[] = this.commandeForm.value.orderLineList;

    orderLineList.forEach(commandLine => {
      commandLine.amount ? amount += commandLine.amount : 0;
    })
    this.commandeForm.patchValue({prixTotal: amount});
  }


  addCommande() {
    this.commandeService.createCommande(this.commandeForm.value).subscribe(res => {
      this.router.navigate(['/commandes'])
    })
  }

  getClients(): void {
    this.clientService.getAllClients().subscribe((data) => {
      this.clients = data;
    })
  }


}

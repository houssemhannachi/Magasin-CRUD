import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FileUploadService} from "../../_services/file-upload.service";
import {ProductService} from "../../_services/product.service";
import Swal from "sweetalert2";
import {CommandeService} from "../../_services/commande.service";
import {Commande} from "../../_models/Commande";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  commandes!: Commande[];

  dataSource!: MatTableDataSource<Commande>;
  displayedColumns: string[] = ['id', 'pt', 'client', 'cc'];


  constructor(private route: ActivatedRoute, private commandeService: CommandeService, private uploadService: FileUploadService, private productService: ProductService) {
    this.dataSource = new MatTableDataSource()
  }


  getAllCommandes() {
    /*xthis.commandeService.getAllCommandes().subscribe(data => {
      this.dataSource.data = data;
    })*/
    this.commandes = this.route.snapshot.data.commande;
    this.dataSource.data = this.commandes;
  }

  getAllCommandesBack() {
    this.commandeService.getAllCommandes().subscribe(data => {
      this.dataSource.data = data;
    })

  }


  ngOnInit(): void {
    this.getAllCommandes();


  }


  onDelete(id: number) {

    Swal.fire({
      title: 'Supprimer',
      text: 'Voulez-vous supprimer cette commande?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      confirmButtonColor: '#006400',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#8B0000'
    }).then((result) => {
      if (result.value) {
        this.commandeService.deleteCommandeById(id).subscribe(
          result => {
            this.getAllCommandesBack();

            Swal.fire({
              title: 'Supprimé!',
              text: 'Cette commande a été supprimée.',
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
}

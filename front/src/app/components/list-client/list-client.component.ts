import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import Swal from "sweetalert2";
import {ClientService} from "../../_services/client.service";
import {Client} from "../../_models/Client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  dataSource!: MatTableDataSource<Client>;
  displayedColumns: string[] = ['id', 'nom', 'cc'];
  clients!: Client[];

  constructor(private route: ActivatedRoute, private clientService: ClientService) {
    this.dataSource = new MatTableDataSource()
  }


  getAllClients() {
    this.clients = this.route.snapshot.data.client;
    this.dataSource.data = this.clients;
  }

  getAllClientsBack() {
    this.clientService.getAllClients().subscribe(data => {
      this.dataSource.data = data;
    })

  }

  ngOnInit(): void {
    this.getAllClients();


  }


  onDelete(client: Client) {

    Swal.fire({
      title: 'Supprimer',
      text: 'Voulez-vous supprimer ce client?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      confirmButtonColor: '#006400',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#8B0000'
    }).then((result) => {
      if (result.value) {
        this.clientService.deleteClientById(client.clientId).subscribe(
          result => {
            this.getAllClientsBack();

            Swal.fire({
              title: 'Supprimé!',
              text: 'Ce client a été supprimé.',
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
              text: 'Ce client a des commandes en cours.',
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

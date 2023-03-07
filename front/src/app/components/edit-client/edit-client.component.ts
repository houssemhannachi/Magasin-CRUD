import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../_services/client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id!: number;
  clientForm = new FormGroup({
    nomClient: new FormControl(null, [Validators.required]),
  });

  constructor(private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.clientForm.patchValue({nomClient: data.nomClient})

    })
  }

  onSubmit() {
    this.clientService.updateClient({clientId: this.id, ...this.clientForm.value}).subscribe(() => {
      this.router.navigate(['/clients']);
    })
  }

}

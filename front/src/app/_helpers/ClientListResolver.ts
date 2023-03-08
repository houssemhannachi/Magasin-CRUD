import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {ClientService} from "../_services/client.service";

@Injectable({
  providedIn: 'root'
})
export class ClientListResolver implements Resolve<any> {

  constructor(private clientService:ClientService) { }

  resolve() {
    return this.clientService.getAllClients();
  }

}

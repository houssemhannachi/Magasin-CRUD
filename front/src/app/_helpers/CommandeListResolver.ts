import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {CategoryService} from "../_services/category.service";
import {CommandeService} from "../_services/commande.service";

@Injectable({
  providedIn: 'root'
})
export class CommandeListResolver implements Resolve<any> {

  constructor(private commandeService:CommandeService) { }

  resolve() {
    return this.commandeService.getAllCommandes();
  }

}

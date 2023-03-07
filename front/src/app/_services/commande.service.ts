import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../_models/Commande";

const API_URL = '/server/api/';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient) {
  }

  createCommande(commande: Commande): Observable<Commande> {
    return this.httpClient.post<Commande>(API_URL + "addOrder", commande);
  }

  getAllCommandes(): Observable<Commande[]> {
    return this.httpClient.get<Commande[]>(API_URL + "getAllOrders");
  }

  deleteCommandeById(idCommande: number | undefined) :Observable<string>{
    return this.httpClient.delete<string>(API_URL + `deleteOrder/${idCommande}`);
  }


}

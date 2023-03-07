import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../_models/Client";

const API_URL = '/server/api/';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {
  }

  getAllClients(): Observable<any> {
    return this.httpClient.get<any>(API_URL+'getAllClients');
  }

  addClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(API_URL+"addClient", client);
  }

  deleteClientById(id: number | undefined): Observable<string> {
    return this.httpClient.delete<string>(API_URL+`deleteClient/${id}`);
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(API_URL+`getClientById/${id}`)

  }

  updateClient(client : Client):Observable<Client>{
    return this.httpClient.put<Client>(API_URL+"editClient",client);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../_models/Product";
import {HttpClient} from "@angular/common/http";

const API_URL = '/server/api/';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllActions(): Observable<any> {
    return this.httpClient.get<any>(API_URL + "getAllActions");
  }
}

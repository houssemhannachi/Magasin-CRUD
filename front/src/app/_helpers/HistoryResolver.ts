import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {ProductService} from "../_services/product.service";
import {HistoryService} from "../_services/history.service";

@Injectable({
  providedIn: 'root'
})
export class HistoryResolver implements Resolve<any> {

  constructor(private historyService:HistoryService) { }

  resolve() {
    return this.historyService.getAllActions();
  }

}

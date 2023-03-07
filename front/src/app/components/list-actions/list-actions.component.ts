import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../_models/Product";
import {MatTableDataSource} from "@angular/material/table";
import {HistoryService} from "../../_services/history.service";
import {ActivatedRoute} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit{

  products!: Product[];
  dataSource!: MatTableDataSource<Product>;
  displayedColumns: string[] = ['id', 'nom'];
  actions?:any;

  constructor(private route: ActivatedRoute,private historyService:HistoryService) {
    this.dataSource = new MatTableDataSource()
  }


  getAllActions() {
    this.actions = this.route.snapshot.data.action;
    this.dataSource.data = this.actions;
    console.log(this.actions)

  }

  ngOnInit(): void {
    this.getAllActions();


  }





}

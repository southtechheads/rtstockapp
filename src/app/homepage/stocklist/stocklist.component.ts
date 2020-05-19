import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  //for testing only
  stocks:string[] = ['stock 1','stock 2','stock 3','stock 3','stock 3','stock 3','stock 3','stock 3','stock 3','stock 3']
  constructor() { }

  ngOnInit(): void {
  }

}

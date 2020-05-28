import { Component, OnInit, Input } from '@angular/core';
import { StockService  } from '../../../stock.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.css']
})
export class StockitemComponent implements OnInit {

  //the following vars are created to test the UI
  @Input() stockName:string ;
  @Input() stockValue:number ;
  @Input() stockPrevious:number ;
  @Input() negative:boolean;

  constructor(private stockService: StockService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.negative = this.stockPrevious > this.stockValue ? true : false;
  }

}
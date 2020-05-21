import { Component, OnInit } from '@angular/core';
import { StockchartComponent } from './stockchart/stockchart.component';


@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent implements OnInit {

  //stock data
  stockName = 'Lorem Ipsum';
  stockPrice = Math.random() * 100 + Math.random();
  stockDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  stockCost = this.stockPrice;


  constructor() { }

  ngOnInit(): void {
  }

}

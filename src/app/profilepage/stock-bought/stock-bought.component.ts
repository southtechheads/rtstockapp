import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';

@Component({
  selector: 'app-stock-bought',
  templateUrl: './stock-bought.component.html',
  styleUrls: ['./stock-bought.component.css'],
})
export class StockBoughtComponent implements OnInit {

  //replace this with firebase user's data
  stocksBought = [
    {
      symbol: "RCL",
      share: 10
    },
    {
      symbol: "MRO",
      share: 5
    },
    {
      symbol: "UAA",
      share: 40
    },
    {
      symbol: "KR",
      share: 20
    }];

  portfolio = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {

    this.stocksBought.map((element) => {
      this.stockService.getPrice(element.symbol).subscribe((data) => {
        this.portfolio.push({
          symbol: element.symbol,
          current: data["c"],
          previous: data["pc"],
          share: element.share
        })
      })
      return this.portfolio;
    });




  }
}

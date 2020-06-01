import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';

@Component({
  selector: 'app-stock-bought',
  templateUrl: './stock-bought.component.html',
  styleUrls: ['./stock-bought.component.css'],
})
export class StockBoughtComponent implements OnInit {
  stocks;
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stocks = this.stockService.getTopMovers();
    console.log('stocks array ', this.stocks);
    this.stocks.map((element) => {
      console.log(element);
      return {
        symbol: element.symbol,
        current: element.current,
        previous: element.previous,
      };
    });

    this.stockService.getSymbols().subscribe((data) => {
      console.log(data);
    });
  }
}

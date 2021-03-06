import { Component, OnInit } from '@angular/core';
import { StockchartComponent } from './stockchart/stockchart.component';
import { StockService } from '../stock.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.css']
})
export class StockpageComponent implements OnInit {

  //stock data
  companyProfile;
  stockPrice;
  stockShares;
  stockCost;
  symbol;
  negative;
  growth;


  constructor(private stockService: StockService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {

    //get symbol from current route's params
    this.symbol = this.route.snapshot.params['symbol'];
    this.route.params.subscribe((params: Params) => {
      this.symbol = params['symbol'];
      this.symbol = this.symbol.toUpperCase();
    })

    //company profile display
    this.stockService.getData(this.symbol).subscribe((data) => {
      console.log(data);
      this.companyProfile = data;
    })

    //stock price values
    this.stockService.getPrice(this.symbol).subscribe((data) => {
      this.stockPrice = data;
      this.negative = this.stockPrice["pc"] > this.stockPrice["c"] ? true : false;
      this.growth = (this.stockPrice["c"] - this.stockPrice["pc"]) / this.stockPrice["c"];
    })

  }


  onGetShares(event: any) {
    this.stockCost = this.stockPrice["c"] * this.stockShares;
  }


  onBuyStocks(value: number, symbol: string, shares: number) {
    let uid = this.auth.isAuthenticated().uid;
    this.stockService.addStock(value, symbol, shares, uid);
    console.log('buy button clicked');
    alert(`You bought ${shares} stocks from ${symbol}. Your total transaction cost is ${value}.`);

  }


}

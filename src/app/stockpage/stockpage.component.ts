import { Component, OnInit } from '@angular/core';
import { StockchartComponent } from './stockchart/stockchart.component';
import { StockService } from '../stock.service';
import { ActivatedRoute, Params} from '@angular/router';

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


  constructor(private stockService: StockService, private route: ActivatedRoute) { }

  ngOnInit() {
    

    //get symbol from current route's params
    this.symbol = this.route.snapshot.params['symbol'];
    this.route.params.subscribe((params: Params) => {
      this.symbol = params['symbol'];
      this.symbol = this.symbol.toUpperCase();
    })


    this.stockService.getData(this.symbol).subscribe((data) => {
      console.log(data);
      this.companyProfile = data;
    })

    this.stockService.getPrice(this.symbol).subscribe((data) => {
      this.stockPrice = data;
      this.negative = this.stockPrice["pc"] > this.stockPrice["c"] ? true : false;
      this.growth = (this.stockPrice["c"] - this.stockPrice["pc"]) / this.stockPrice["c"];
    })

  }

  onGetShares(event:any){
    this.stockCost = this.stockPrice["c"] * this.stockShares;
  }

  //uid sample for testing only
  id = 'sdjfsjbdf'
  onBuyStocks(value:number, symbol:string, shares:number, uid:string){
    console.log('log...........')
    console.log(value);
    console.log(symbol);
    console.log(shares);
    console.log(uid);
  }

}

import { Component, OnInit } from '@angular/core';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchbarComponent } from './browse/searchbar/searchbar.component';
import { CompanyComponent } from './browse/company/company.component';
import { NewsComponent } from './news/news.component';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  topMovers:any; 

  getTopMovers():void {
    this.topMovers = this.stockService.getTopMovers();
  }
  constructor(private stockService: StockService) { }

  ngOnInit() {
    console.log("loaded")
    this.getTopMovers();
  }

}

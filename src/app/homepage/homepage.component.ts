import { Component, OnInit } from '@angular/core';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchbarComponent } from './browse/searchbar/searchbar.component';
import { CompanyComponent } from './browse/company/company.component';
import { NewsComponent } from './news/news.component';
import {StockService} from '../stock.service';
import {Observable} from 'rxjs';
import {Quote} from '../models/quote';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  topMovers:any []= []; 
  
  quote = new Quote;
  constructor(private stockService: StockService) { }

  
  ngOnInit() {
    console.log("loaded");
    let onGetQuote= this.stockService.getQuote(this.quote).subscribe((quoteArr: any ) => {
    this.quote = quoteArr;
    console.log(quoteArr)
    }, (error) => {
      console.log(error)
    })
  
   return 
    
  }

}

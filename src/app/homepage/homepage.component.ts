import { Component, OnInit } from '@angular/core';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchbarComponent } from './browse/searchbar/searchbar.component';
import { CompanyComponent } from './browse/company/company.component';
import { NewsComponent } from './news/news.component';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  topMovers;

  quote = new Quote();
  constructor(private stockService: StockService) {}

  ngOnInit() {
    console.log('loaded');

    let getResponse = this.stockService.getTopMovers();

    console.log('Get top movers service test: ', getResponse);
    // {
    //   this.topMovers = list;
    //   console.log(list.json)
    //   console.log(this.topMovers);
    // }

    // let onGetTopMovers = this.stockService.getTopMovers().subscribe(list => {
    //
    // })
    // return this.topMovers;
  }
}

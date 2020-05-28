import { Component, OnInit } from '@angular/core';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchbarComponent } from './browse/searchbar/searchbar.component';
import { CompanyComponent } from './browse/company/company.component';
import { NewsComponent } from './news/news.component';
import { StockService } from '../stock.service';
import { AuthService } from '../auth.service';
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
  constructor(
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    console.log('loaded', this.authService.isAuthenticated());

    // this.stockService.getTopMovers().subscribe((data: any[]) => {
    //   console.log(data);
    //   // this.products = data;
    // });

    let testApi = this.stockService.getTopMovers();

    console.log('testing api: ', testApi);

    // this.stockService.getTopMovers().subscribe((data: any[]) => {
    //   console.log('Get top movers service test: ', data);
    // });

    // console.log('Get top movers service test: ', getResponse);

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

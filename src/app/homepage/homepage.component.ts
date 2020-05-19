import { Component, OnInit } from '@angular/core';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SearchbarComponent } from './browse/searchbar/searchbar.component';
import { CompanyComponent } from './browse/company/company.component';
import { NewsComponent } from './news/news.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}

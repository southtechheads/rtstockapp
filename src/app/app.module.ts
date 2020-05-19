import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockitemComponent } from './homepage/stocklist/stockitem/stockitem.component';
import { StocklistComponent } from './homepage/stocklist/stocklist.component';
import { SearchbarComponent } from './homepage/browse/searchbar/searchbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyComponent } from './homepage/browse/company/company.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsComponent } from './homepage/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    StockitemComponent,
    StocklistComponent,
    SearchbarComponent,
    HomepageComponent,
    CompanyComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

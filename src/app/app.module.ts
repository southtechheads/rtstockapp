import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockitemComponent } from './homepage/stocklist/stockitem/stockitem.component';
import { StocklistComponent } from './homepage/stocklist/stocklist.component';
import { SearchbarComponent } from './homepage/browse/searchbar/searchbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyComponent } from './homepage/browse/company/company.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsComponent } from './homepage/news/news.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth.guard.service';
import { environment } from '../environments/environment';

import { StockpageComponent } from './stockpage/stockpage.component';
import { StockchartComponent } from './stockpage/stockchart/stockchart.component';

import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockitemComponent,
    StocklistComponent,
    SearchbarComponent,
    HomepageComponent,
    CompanyComponent,
    NewsComponent,
    HeaderComponent,
    LoginFormComponent,
    SignUpComponent,
    StockpageComponent,
    StockchartComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, StockService],
  bootstrap: [AppComponent],
})
export class AppModule {}

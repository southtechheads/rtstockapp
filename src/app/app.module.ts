import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfilepageComponent } from './profilepage/profilepage.component';
import { StockBoughtComponent } from './profilepage/stock-bought/stock-bought.component';
import { StockBoughtItemsComponent } from './profilepage/stock-bought/stock-bought-items/stock-bought-items.component';
import { SearchBarComponent } from './profilepage/search-bar/search-bar.component';
import { WishlistComponent } from './profilepage/wishlist/wishlist.component';
import { WishlistItemComponent } from './profilepage/wishlist/wishlist-item/wishlist-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfilepageComponent,
    StockBoughtComponent,
    StockBoughtItemsComponent,
    SearchBarComponent,
    WishlistComponent,
    WishlistItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

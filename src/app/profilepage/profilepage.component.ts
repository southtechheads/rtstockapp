import { Component, OnInit } from '@angular/core';
import { StockBoughtComponent } from './stock-bought/stock-bought.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StockService } from '../stock.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent implements OnInit {
  topMovers;

  quote = new Quote();
  constructor(
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log('loaded', this.authService.isAuthenticated());
  }
}

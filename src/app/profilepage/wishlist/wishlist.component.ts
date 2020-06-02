import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  //sample only. replace this with database call
  stocks = ['NKE', 'HD', 'CRM'];
  price;
  watchlistObj = [];
  profile: Observable<any>;
  item: Observable<any>;
  items: any = {};

  constructor(
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    let user: any = this.authService.isAuthenticated();

    this.stockService.getUserStocks(user.uid).subscribe((result) => {
      this.items = result;
      console.log('items: ', this.items);
      if (this.items) {
        for (let element in this.items) {
          console.log('element: ', element);
          this.stockService.getPrice(element).subscribe((data) => {
            this.watchlistObj.push({
              symbol: element,
              price: data['c'],
            });
          });
        }
      }
    });

    // this.stocks.map((element) => {
    //   this.stockService.getPrice(element).subscribe((data) => {
    //     this.watchlistObj.push({
    //       symbol: element,
    //       price: data['c'],
    //     });
    //   });
    //   return this.watchlistObj;
    // });

    // console.log('stocks array ', this.stocks);
    // this.stocks.map((element) => {
    //   console.log(element);
    //   return {
    //     symbol: element.symbol,
    //     current: element.current,
    //     previous: element.previous,
    //   };
    // });

    // this.stockService.getSymbols().subscribe((data) => {
    //   console.log(data);
    // });
  }
}

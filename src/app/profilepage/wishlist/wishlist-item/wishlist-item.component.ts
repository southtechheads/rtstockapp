import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../../stock.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent implements OnInit {
  @Input() stockName: string;
  @Input() stockValue: number;
  @Input() stockPrevious: number;
  @Input() negative: boolean;

  constructor(
    private stockService: StockService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.negative = this.stockPrevious > this.stockValue ? true : false;
  }
}

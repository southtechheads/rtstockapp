import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../../stock.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-bought-items',
  templateUrl: './stock-bought-items.component.html',
  styleUrls: ['./stock-bought-items.component.css'],
})
export class StockBoughtItemsComponent implements OnInit {
  @Input() stockName: string;
  @Input() stockValue: number;
  @Input() stockPrevious: number;
  @Input() negative: boolean;
  @Input() stockShare: number;

  constructor(
    private stockService: StockService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.negative = this.stockPrevious > this.stockValue ? true : false;
  }
}

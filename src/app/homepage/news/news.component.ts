import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //change this with News API data
  newslist;

  constructor(private stockService: StockService) { }

  ngOnInit(){
    this.stockService.getNews().subscribe((data) => {
      console.log('news',data);
      this.newslist = data;
    })
  }

}

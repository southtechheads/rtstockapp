import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../stock.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  stockName = 'AAPL'
  
  sampleList = ["AA",
  "AAN",
  "AAP",
  "AAT",
  "AB",
  "ABB",
  "ABBV",
  "ABC"]

  constructor(private stockService: StockService) { }
  
  ngOnInit() {

  }

  onKey(event:any){
    if(!this.stockName || null){
      this.stockName = 'AAPL'
    } else{
      this.sampleList.filter((element) => {
        element = event.target.value;
        this.stockName = element;
      })
    }
  }




}

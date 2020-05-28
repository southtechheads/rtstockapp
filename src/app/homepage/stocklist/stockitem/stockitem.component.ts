import { Component, OnInit } from '@angular/core';
import { StockService  } from '../../../stock.service';



@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.css']
})
export class StockitemComponent implements OnInit {

  //the following vars are created to test the UI
  stockName:string = `STOCK${Math.floor(Math.random() * 100)}`
  stockValue:number = Math.random() * 100 + Math.random();
  negative:boolean = Math.random() > 0.5 ? true: false;


  constructor(private stockService: StockService) { }

  ngOnInit() {

  
  }

}



  // this.stockService.getSymbols().subscribe((data) => {
    //   console.log('get symbols...')
    //   console.log(data)
    // })
import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../stock.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private stockService: StockService) { }
  
  ngOnInit(): void {
  }




}

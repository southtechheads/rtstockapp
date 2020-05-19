import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  //test only
  companies: string[] = ['company 1', 'company 2', 'company 3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}

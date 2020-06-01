import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //get stock data from assets/topmovers.json
    this.http.get("assets/topmovers.json").subscribe(data =>{
      this.companies = data["top"];
      
      this.companies.map((element) => {
        return element
      })
    })
  }

}

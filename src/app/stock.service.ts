import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stockURL: string = 'https://finnhub.io/api/v1/';
  symbolURL: string = '/stock/symbol?exchange=US';
  companyProfileURL: string = '/stock/profile2?symbol=';
  quoteURL: string = '/quote?symbol=';
  firebaseURL: string;
  symbol: string;
  profile: any;
  symbols:any;
  topMovers:any[] = ['MSFT', 'AAPL', 'AMZN', 'GOOGL','FB','INTL']
  quote:any;
  // companynewsURL '/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01'
  // earnings '/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=AAPL'

  constructor(private http: HttpClient) {}


// intial SignIn calls 
  getSymbols(): Observable<Symbol[]> {
    this.symbols = this.http.get<Symbol[]>(`${this.stockURL}${this.symbolURL}`)
    if (this.symbols){
      console.log(this.symbols)
    } 
    return this.symbols;  
  }

  getProfile(input:string){
   this.profile = this.http.get(`${this.stockURL}${this.companyProfileURL}${input}`);
   type Profile = {
     country: string 
     name: string 
     logo: string 
     market: number
     url: string
   }
   let newprofile = <Profile>{
    country:  this.profile.country, 
    name: this.profile.name,
    logo: this.profile.logo,
    market: this.profile.marketCapilization,
    url:  this.profile.weburl
   }
   return newprofile
  }
   
  getTopMovers(){
   let newTopMovers =  _.forEach(this.topMovers, function(symbol){
      this.quote = this.http.get(`${this.stockURL}${this.quoteURL}${symbol}`);
      console.log(this.quote);
      return this.quote;
    })
    console.log(newTopMovers);
    return newTopMovers;
  

  }


  
}
   



  



// functions we want
//SignIn()
//signInWithEmailAndPassword ( email :  string ,  password :  string ) : Promise < UserCredential >
//SignOut
//signOut ( ) : Promise < void >
//CreateNewAcc
//createUserWithEmailAndPassword ( email :  string ,  password :  string ) : Promise < UserCredential >
// getSymbols():Observable<Symbol[]> {
//   return this.http.get<Symbol>()`${stockURL}${symbolURL}`}
//calender earnings
//getprofile
//company news

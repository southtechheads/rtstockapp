import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Quote } from './models/quote';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stockURL: string = 'https://finnhub.io/api/v1/';
  symbolURL: string = '/stock/symbol?exchange=US';
  companyProfileURL: string = '/stock/profile2?symbol=';
  tokenURL: string = 'token=br2p5tvrh5rbm8ou56tg';
  quoteURL: string = '/quote?symbol=';
  firebaseURL: string = 'https://stockappdb.firebaseio.com/';
  symbol: string = 'MSFT';
  profile: any;
  symbols: any;
  topMovers: any[] = ['MSFT', 'AAPL', 'AMZN', 'GOOGL', 'FB', 'INTL'];

  token: string = '&token=br2p5tvrh5rbm8ou56tg';

  // companynewsURL '/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01'
  // earnings '/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=AAPL'

  constructor(private http: HttpClient) {}

  // test test test remove this afterwards
  getData() {
    return this.http.get(
      `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=br2p5tvrh5rbm8ou56tg`
    );
  }

  // intial SignIn calls
  getSymbols(): Observable<Symbol[]> {
    this.symbols = this.http.get<Symbol[]>(
      `${this.stockURL}${this.symbolURL}&${this.tokenURL}`
    );
    // if (this.symbols){
    //   console.log(this.symbols)
    // }
    return this.symbols;
  }

  // getProfile(input:string){
  //  this.profile = this.http.get(`${this.stockURL}${this.companyProfileURL}${input}`);
  //  type Profile = {
  //    country: string
  //    name: string
  //    logo: string
  //    market: number
  //    url: string
  //  }
  //  let newprofile = <Profile>{
  //   country:  this.profile.country,
  //   name: this.profile.name,
  //   logo: this.profile.logo,
  //   market: this.profile.marketCapilization,
  //   url:  this.profile.weburl
  //  }
  //  return newprofile
  // }

  public getQuote(quote: Quote) {
    let quoteurl = `${this.stockURL}${this.quoteURL}${this.symbol}${this.token}`;
    return this.http.get<Quote[]>(quoteurl);
  }
}

// getTopMovers(){
//  let newTopMovers =  _.forEach(this.topMovers, function(symbol){
//     this.quote = this.http.get(`${this.stockURL}${this.quoteURL}${symbol}`);
//     console.log(this.quote);
//     return this.quote;
//   })
//   console.log(newTopMovers);
//   return newTopMovers;

// }

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

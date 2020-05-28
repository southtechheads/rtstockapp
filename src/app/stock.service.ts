import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { retry, catchError, timeout, delay } from 'rxjs/operators';
import * as _ from 'lodash';
import { Quote } from './models/quote';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) { }

  token: string = '&token=br2p5tvrh5rbm8ou56tg';
  stockURL: string = 'https://finnhub.io/api/v1';
  symbolURL: string = '/stock/symbol?exchange=US';
  newsURL: string = '/news?category=general';
  companyProfileURL: string = '/stock/profile2?symbol=';
  public tokenURL: string = 'token=br2p5tvrh5rbm8ou56tg';
  public quoteURL: string = '/quote?symbol=';
  firebaseURL: string = 'https://stockappdb.firebaseio.com/';
  symbol: string = 'MSFT';
  profile: any;
  symbols: any;
  topArray: string[] = [
    'MSFT',
    'AAPL',
    'AMZN',
    'GOOGL',
    'FB',
    'INTL',
    'VZ',
    'ADBE',
    'CSCO',
    'ORCL',
    'CRM',
    'UAA',
    'LVMHF',
    'NKE',
    'HON'
    // 'HESAY',
    // 'MRO',
    // 'XOM',
    // 'CVX',
    // 'JNJ',
    // 'HD',
    // 'CGC',
  ];


  // quotes: Quote[] = [];
  quotes = [];



  // companynewsURL '/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01'
  // earnings '/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=AAPL'

  //get list of symbols
  getSymbols() {
    return this.http.get(`${this.stockURL}${this.symbolURL}&${this.tokenURL}`);
  }

  //get news general category
  getNews(){
    return this.http.get(`${this.stockURL}${this.newsURL}&${this.tokenURL}`)
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
  //get a quote

  public getQuote(quote: Quote) {
    let quoteurl = `${this.stockURL}${this.quoteURL}${this.symbol}${this.token}`;
    return this.http.get<Quote[]>(quoteurl);
  }


  //get top movers data
  getTopMovers() {
    this.topArray.map((item) => {
      this.http
        .get(`${this.stockURL}${this.quoteURL}${item}&${this.tokenURL}`)
        .pipe(timeout(5000))
        .subscribe((data) => {
          let obj: { [key: string]: any } = data;
          obj.symbol = item;
          obj.current = data["c"];
          obj.previous = data["pc"];
          this.quotes.push(obj);
        });
    });

    return this.quotes;
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
// _.forEach(this.topMovers, function(symbol){
// let tmSymbol = this.symbol;
// return

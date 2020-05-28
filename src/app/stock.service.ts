import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { Quote } from './models/quote';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  stockURL: string = 'https://finnhub.io/api/v1';
  symbolURL: string = '/stock/symbol?exchange=US';
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
    'HON',
    'HESAY',
    'MRO',
    'XOM',
    'CVX',
    'JNJ',
    'HD',
    'CGC',
  ];
  list;
  // quotes: Quote[] = [];
  private quotes = [];

  token: string = '&token=br2p5tvrh5rbm8ou56tg';

  // companynewsURL '/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01'
  // earnings '/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=AAPL'

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
  //get a quote
  public getQuote(quote: Quote) {
    let quoteurl = `${this.stockURL}${this.quoteURL}${this.symbol}${this.token}`;
    return this.http.get<Quote[]>(quoteurl);
  }

  getTopMovers() {
    this.topArray.map((item) => {
      // console.log(item);
      this.http
        .get(`${this.stockURL}${this.quoteURL}${item}&${this.tokenURL}`)
        .subscribe((data) => {
          let obj: { [key: string]: any } = data;

          obj.symbol = item;
          // console.log('look at me: ', obj);
          this.quotes.push(data);
        });
    });

    return this.quotes;
  }

  // getTopMovers(): Observable<Quote[]> {
  //   // let moversArray = [];
  //   this.http
  //     .get<Quote[]>(`${this.stockURL}${this.quoteURL}AAPL&${this.tokenURL}`)
  //     .subscribe((data: any[]) => {
  //       console.log(data);
  //       this.quotes.push(data);
  //     });

  //   // let two = this.http.get<Quote[]>(
  //   //   `${this.stockURL}${this.quoteURL}AMZN&${this.tokenURL}`
  //   // );

  //   // moversArray.push(two);
  //   // if (this.symbols){
  //   //   console.log(this.symbols)
  //   // }
  //   return this.quotes;
  // }

  //TopMovers list for homepage
  // public getTopMovers() {
  //   let moversArray = [];

  //   let one = this.http.get(
  //     `https://finnhub.io/api/v1/quote?symbol=AAPL&token=br2p5tvrh5rbm8ou56tg`
  //   );
  //   // moversArray.push(one);
  //   // let two = this.http.get(
  //   //   `${this.stockURL}${this.quoteURL}AAPL&${this.tokenURL}`
  //   // );
  //   // moversArray.push(two);
  //   // let three = this.http.get(
  //   //   `${this.stockURL}${this.quoteURL}AMZN&${this.tokenURL}`
  //   // );
  //   // moversArray.push(three);
  //   // let four = this.http.get(
  //   //   `${this.stockURL}${this.quoteURL}GOOGL&${this.tokenURL}`
  //   // );
  //   // moversArray.push(four);
  //   // let five = this.http.get(
  //   //   `${this.stockURL}${this.quoteURL}INTL&${this.tokenURL}`
  //   // );
  //   // moversArray.push(five);

  //   console.log('request: ', one);
  //   return one;
  // }
}

// let x;
// for(x of this.topMovers){
// let newTopMover = this.http.get<Quote[]>(`${this.stockURL}${this.quoteURL}${x}${this.token}`);
// let list = [];
// list.push(newTopMover);
// return list
// }

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
// _.forEach(this.topMovers, function(symbol){
// let tmSymbol = this.symbol;
// return

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  // companynewsURL '/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01'
  // earnings '/calendar/earnings?from=2010-01-01&to=2020-03-15&symbol=AAPL'

  constructor(private http: HttpClient) {}


// intial SignIn calls 
  getSymbols(): Observable<Symbol[]> {
    return this.http.get<Symbol[]>(`${this.stockURL}${this.symbolURL}`);
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

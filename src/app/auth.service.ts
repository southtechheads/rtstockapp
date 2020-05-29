import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private getUser: any;
  private loggedIn: boolean;
  constructor(private auth: AngularFireAuth) {
    this.getUser = this.auth.user;
    this.loggedIn = false;
  }

  // private isUserLoggedIn;
  // private username;

  // constructor() {
  //     this.isUserLoggedIn = false
  // }

  // setUserLoggedIn() {
  //     this.isUserLoggedIn = true;
  // }

  // getUserLoggedIn() {
  //     return this.isUserLoggedIn;
  // }

  currentUser: any = {};

  private setSignedInUser(data: any) {
    const { uid, email } = data;

    this.currentUser.uid = uid;
    this.currentUser.email = email;

    console.log('check user data: ', this.currentUser);
    localStorage.setItem('stockapp:user', JSON.stringify(this.currentUser));
    this.loggedIn = true;
  }

  async firebaseSignIn(email, password) {
    let getData = await this.auth.signInWithEmailAndPassword(email, password);

    let getDataUser = await getData.user;

    if (getDataUser) {
      await this.setSignedInUser(getDataUser);
      return true;
    } else {
      return false;
    }

    // return isLoggedIn;
  }

  async firebaseSignUp(email, password) {
    const firebaseAuthSignUp = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    const getUserData = firebaseAuthSignUp;

    console.log('test sign up method: ', getUserData);
    if (getUserData) {
      return true;
    }

    return false;
  }

  isAuthenticated() {
    let currentUser = JSON.parse(localStorage.getItem('stockapp:user'));

    console.log('authenticated: ', currentUser);

    if (currentUser) {
      return currentUser;
    }
    return null;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.auth.signOut();
  }
}

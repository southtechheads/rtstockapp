import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

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
  loggedIn: boolean;

  async firebaseSignIn(email, password) {
    const firebaseAuthSignIn = await this.auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    if (firebaseAuthSignIn) {
      const userId = firebaseAuthSignIn.user.uid;
      //sa
      await localStorage.setItem('stockapp:uid', JSON.stringify(userId));

      return true;
    }
    return false;
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
    let currentUser = JSON.parse(localStorage.getItem('stockapp:uid'));

    if (currentUser) {
      return currentUser;
    }
    return;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.auth.signOut();
  }
}

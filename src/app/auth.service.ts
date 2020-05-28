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

  firebaseSignIn(email, password) {
    let currentUser;

    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('user ', user);
        currentUser = user;
      })
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
        console.log('error: ', errorMessage);
        currentUser = {};
      });

    // if (firebaseAuthSignIn) {
    //   const user = firebaseAuthSignIn.user;
    //   //sa
    //   await localStorage.setItem('stockapp:user', JSON.stringify(user));

    //   return true;
    // } else {
    //   return false;
    // }
    return currentUser;
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

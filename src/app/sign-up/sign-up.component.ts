import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  signUpUser(e) {
    e.preventDefault();
    let email = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log(email, password);
    if (email && password) {
      const isSignedUp = this.authService.firebaseSignUp(email, password);
      // this.authService.login();
      if (isSignedUp) {
        window.alert('Sign up successful, please sign in.');
        this.router.navigate(['']);
      } else {
        window.alert('Sign up unsuccessful, please try again.');
      }
    }

    console.log('nothing sent');
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}

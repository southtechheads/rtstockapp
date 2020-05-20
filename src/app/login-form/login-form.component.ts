import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  loginUser(e) {
    e.preventDefault();
    let email = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log(email, password);

    if (email && password) {
      let signInStatus = this.authService.firebaseSignIn(email, password);

      if (signInStatus) {
        this.authService.login();
        this.router.navigate(['home']);
      }
    }
    return false;
    // if (email == 'admin@gmail.com' && password == '12345') {
    //   this.authService.login();
    //   this.router.navigate(['home']);
    // }
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}

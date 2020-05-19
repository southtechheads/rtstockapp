import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // change this into false
  isSignedIn: boolean = true;
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth.guard.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{
  path: '', component: LoginFormComponent
},
{
  path: 'signup', component: SignUpComponent
},
{
  path: 'home', canActivateChild: [AuthGuardService], component: HomepageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

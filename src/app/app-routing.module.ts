import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

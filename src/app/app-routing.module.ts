import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentSignupComponent } from './components/student-signup/student-signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentForgotpswdComponent } from './components/student-forgotpswd/student-forgotpswd.component';
import { StudentEmailverifyComponent } from './components/student-emailverify/student-emailverify.component';
import { AuthGuard } from "./auth.guard";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: StudentLoginComponent},
  { path: 'sign-up', component: StudentSignupComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: StudentForgotpswdComponent },
  { path: 'email-verification', component: StudentEmailverifyComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


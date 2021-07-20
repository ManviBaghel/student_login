import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NgAuthService } from "./ng-auth.service";
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentSignupComponent } from './components/student-signup/student-signup.component';
import { StudentEmailverifyComponent } from './components/student-emailverify/student-emailverify.component';
import { StudentForgotpswdComponent } from './components/student-forgotpswd/student-forgotpswd.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader'; 
import { NgxUiLoaderHttpModule } from "ngx-ui-loader";
console.warn("component module")
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    StudentForgotpswdComponent,
    StudentEmailverifyComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    StudentEmailverifyComponent,
    StudentForgotpswdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebae),
    AngularFireAuthModule,
    AngularFirestoreModule, 
    NgxUiLoaderModule,
     NgxUiLoaderHttpModule.forRoot({showForeground: true,
    }),
 

  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

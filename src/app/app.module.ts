import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TutorialsComponent } from './component/tutorials/tutorials.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './component/forgot/forgot.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { MyAccountComponent } from './component/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialsComponent,
    ContactUsComponent,
    NavbarComponent,
    ForgotComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    MyAccountComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

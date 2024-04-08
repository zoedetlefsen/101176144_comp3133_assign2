import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'; // Import AppComponent from its file
import { LoginComponent } from './login/login.component'; // Import LoginComponent from its file
import { SignupComponent } from './signup/signup.component'; // Import SignupComponent from its file

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

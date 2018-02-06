import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { LogindataService } from './logindata.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './my-route.routing.ts.routing';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
   
    FormsComponent,
    LoginComponent,
    HomeComponent,
    
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogindataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { EdituserComponent } from './edituser/edituser.component';
import { LoginGuard } from '../guards/login.guard';




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    HomeComponent,
    EdituserComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogindataService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginGuard } from '../guards/login.guard';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard]
        
      },
   
    {
         path: "login",
     component: LoginComponent
      },

    { 
        path: "signup",
     component: FormsComponent
      },

    {
         path: "showusers",
     component: HomeComponent 
    },
    {
        path: "edituser",
    component: EdituserComponent 
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyeedashboardComponent } from './emplyeedashboard/emplyeedashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:EmplyeedashboardComponent},
  {path:'',redirectTo:'login' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

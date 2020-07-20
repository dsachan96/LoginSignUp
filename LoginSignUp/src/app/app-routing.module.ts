import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'Login' , component : LoginComponent },
  { path: 'Login/SignUp' , component : SignUpComponent},
  { path: 'SignUp' , component : SignUpComponent },
  { path: './' , component : AppComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginComponent];
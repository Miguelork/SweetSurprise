import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterformComponente } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterformComponente},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

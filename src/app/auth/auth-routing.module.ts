import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormregisterComponent } from './formregister/formregister.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: FormregisterComponent},
  {path: 'login', component: FormloginComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

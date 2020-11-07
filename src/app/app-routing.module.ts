import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'login', component: LoginComponent},
  //{path: '', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

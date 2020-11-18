import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { HomeComponent } from './pages/home/home.component';

import { PerfilComponent } from './pages/perfil/perfil.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},

  {path: 'admi', component: AdministradorComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: 'contacto', component: ContactanosComponent},
  {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard]},

  

  //{path: '', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

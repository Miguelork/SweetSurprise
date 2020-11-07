import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomecarruselComponent } from './components/homecarrusel/homecarrusel.component';
import { HomeComponent } from './pages/home/home.component';
import { HomejumbComponent } from './components/homejumb/homejumb.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ListcardproductComponent } from './components/listcardproduct/listcardproduct.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { AdmlistproductComponent } from './components/admlistproduct/admlistproduct.component';
import { AdmlistuserComponent } from './components/admlistuser/admlistuser.component';
import { AdminfouserComponent } from './components/adminfouser/adminfouser.component';
import { AdminfoproductComponent } from './components/adminfoproduct/adminfoproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecarruselComponent,
    HomeComponent,
    HomejumbComponent,
    ProductcardComponent,
    TiendaComponent,
    ListcardproductComponent,
    LoginComponent,
    LoginformComponent,
    RegisterformComponent,
    AdministradorComponent,
    AdmlistproductComponent,
    AdmlistuserComponent,
    AdminfouserComponent,
    AdminfoproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

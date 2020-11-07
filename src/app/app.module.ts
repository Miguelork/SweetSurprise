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
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { AdmlistproductComponent } from './components/admlistproduct/admlistproduct.component';
import { AdmlistuserComponent } from './components/admlistuser/admlistuser.component';
import { AdminfouserComponent } from './components/adminfouser/adminfouser.component';
import { AdminfoproductComponent } from './components/adminfoproduct/adminfoproduct.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { ConocetarjetComponent } from './components/conocetarjet/conocetarjet.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilformComponent } from './components/perfilform/perfilform.component';
import { ProductbusqComponent } from './components/productbusq/productbusq.component';
import { PerfildeseoComponent } from './components/perfildeseo/perfildeseo.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AuthModule } from './auth/auth.module';
import { AdmieditproductComponent } from './components/admieditproduct/admieditproduct.component';
import { AdmiedituserComponent } from './components/admiedituser/admiedituser.component';
import { CrudproductService } from './services/crudproduct.service';
import { FormsModule } from '@angular/forms';


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
    AdministradorComponent,
    AdmlistproductComponent,
    AdmlistuserComponent,
    AdminfouserComponent,
    AdminfoproductComponent,
    ConocenosComponent,
    ConocetarjetComponent,
    ContactanosComponent,
    PerfilComponent,
    PerfilformComponent,
    ProductbusqComponent,
    PerfildeseoComponent,
    AdmieditproductComponent,
    AdmiedituserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [CrudproductService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

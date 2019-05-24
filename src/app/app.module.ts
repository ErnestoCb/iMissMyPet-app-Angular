import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule, MatInputModule, MatCardModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

//angular material y las opciones de form para los mismo
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';

//Firebase
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { MapComponent } from './components/map/map.component';

//firebase auth
import { AngularFireAuthModule } from '@angular/fire/auth';

//map
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './components/login/login.component';

//routing y navegacion
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarMailComponent } from './components/verificar-mail/verificar-mail.component';

//Auth Service
import { AuthService } from "./shared/auth.service";

const appRoutes: Routes = [
  { path: 'main',  component: MainPageComponent },
  { path: '',      component: LoginComponent },
  { path: 'registro',  component: RegistroComponent },
  { path: 'recuperar',      component: RecuperarPasswordComponent },
  { path: 'verificar',  component: VerificarMailComponent }
  //{ path: '**',         component: PageNoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    OrdersListComponent,
    MainMenuComponent,
    MapComponent,
    LoginComponent,
    MainPageComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    VerificarMailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlXZzuLE7xkSiAd1LR0zKepitulDEo3JU'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }// esto es solo para debugear
    ),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

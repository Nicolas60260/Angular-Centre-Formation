import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GestionUtilisateurComponent,
    GestionCommercialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [//{
    //provide: HTTP_INTERCEPTORS,
   // useClass: AuthInterceptor,
   // multi: true
  //}
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { FormsModule } from '@angular/forms';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { FormationComponent } from './component/admin/formation/formation.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionParticipantComponent,
    PaiementComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

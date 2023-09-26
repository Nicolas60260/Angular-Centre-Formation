import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { FormationComponent } from './component/admin/formation/formation.component';

import { AppRoutingModule } from './app-routing.module';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';

import { FormsModule } from '@angular/forms';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';

@NgModule({
  declarations: [
    AppComponent,
   
    GestionParticipantComponent,
    PaiementComponent,
    FormationComponent,
 
    LoginComponent,
    GestionProspectComponent,
    GestionAppelComponent,
    GestionCommentaireComponent,
    MenuAdminComponent,
    GestionFormateurComponent,
    GestionCoursComponent
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

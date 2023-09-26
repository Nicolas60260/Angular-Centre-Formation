import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { FormationComponent } from './component/admin/formation/formation.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';
import { PageCommercialComponent } from './component/site/page-commercial/page-commercial.component';


@NgModule({
  declarations: [
    AppComponent,
   
    GestionParticipantComponent,
    PaiementComponent,
    FormationComponent,
    LoginComponent,
    GestionUtilisateurComponent,
    GestionCommercialComponent,
    GestionProspectComponent,
    GestionAppelComponent,
    GestionCommentaireComponent,
    MenuAdminComponent,
    GestionFormateurComponent,
    GestionCoursComponent,
    PageCommercialComponent
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

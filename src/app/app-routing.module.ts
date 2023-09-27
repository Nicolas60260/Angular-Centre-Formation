import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
import { PageCoursComponent } from './component/site/page-cours/page-cours.component';
import { PageCommercialComponent } from './component/site/page-commercial/page-commercial.component';
import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
import { FormationComponent } from './component/admin/formation/formation.component';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './auth.service';









const routes: Routes = [

  // Section d'URLs admins

  {path:'login',component:LoginComponent},
  {path:'menuAdmin',component:MenuAdminComponent, canActivate: [AuthService],data: {role:['ADMIN','PARTICIPANT','FORMATEUR','COMMERCIAL']}},
  {path:'adminCommercial', component:GestionCommercialComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminUtilisateur', component:GestionUtilisateurComponent, canActivate: [AuthService],data: {role:['ADMIN']}},
  {path:'adminFormateur',component:GestionFormateurComponent, canActivate: [AuthService],data: {role:['ADMIN','FORMATEUR']}},
  {path:'adminProspect',component:GestionProspectComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminAppel/:id',component:GestionAppelComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminAppel',component:GestionAppelComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminCommentaire/:id',component:GestionCommentaireComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminCommentaire',component:GestionCommentaireComponent, canActivate: [AuthService],data: {role:['ADMIN','COMMERCIAL']}},
  {path:'adminFormation',component:FormationComponent, canActivate: [AuthService],data: {role:['ADMIN','FORMATEUR']}},
  {path:'adminParticipant',component:GestionParticipantComponent, canActivate: [AuthService],data: {role:['ADMIN','PARTICIPANT','FORMATEUR']}},
  {path:'adminPaiement',component:PaiementComponent, canActivate: [AuthService],data: {role:['ADMIN','PARTICIPANT','COMMERCIAL']}},
  {path:'adminCours',component:GestionCoursComponent, canActivate: [AuthService],data: {role:['ADMIN','PARTICIPANT','FORMATEUR']}},
  {path:'pageCommercial',component:PageCommercialComponent, canActivate: [AuthService],data: {role:['ADMIN']}},

];






@NgModule({


  
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

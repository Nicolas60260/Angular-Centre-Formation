import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { LoginComponent } from './component/login/login.component';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { FormationComponent } from './component/admin/formation/formation.component';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';

const routes: Routes = [
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'adminFormateur',component:GestionFormateurComponent},
  {path:'adminCours',component:GestionCoursComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminAppel/:id',component:GestionAppelComponent},
  {path:'adminAppel',component:GestionAppelComponent},
  {path:'adminCommentaire/:id',component:GestionCommentaireComponent},
  {path:'adminCommentaire',component:GestionCommentaireComponent},
  {path:'gestionparticipant',component:GestionParticipantComponent},
  {path:'login',component:LoginComponent},
  {path:'gestionpaiements',component:PaiementComponent},
  {path:'gestionformations',component:FormationComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



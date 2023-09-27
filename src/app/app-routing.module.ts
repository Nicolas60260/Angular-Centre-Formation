import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';
import { PageCoursComponent } from './component/site/page-cours/page-cours.component';
import { PageCommercialComponent } from './component/site/page-commercial/page-commercial.component';
import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
import { FormationComponent } from './component/admin/formation/formation.component';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [

  // Section d'URLs admins
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'adminCommercial', component:GestionCommercialComponent},
  {path:'adminUtilisateur', component:GestionUtilisateurComponent},
  {path:'adminFormateur',component:GestionFormateurComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminAppel/:id',component:GestionAppelComponent},
  {path:'adminAppel',component:GestionAppelComponent},
  {path:'adminCommentaire/:id',component:GestionCommentaireComponent},
  {path:'adminCommentaire',component:GestionCommentaireComponent},
  {path:'adminFormation',component:FormationComponent},
  {path:'adminParticipant',component:GestionParticipantComponent},
  {path:'adminPaiement',component:PaiementComponent},
  {path:'adminCours',component:GestionCoursComponent},
  {path:'pageCours',component:PageCoursComponent},
  {path:'pageCommercial',component:PageCommercialComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({


  
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

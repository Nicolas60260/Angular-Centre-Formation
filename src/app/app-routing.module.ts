import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { LoginComponent } from './component/login/login.component';
import { PaiementComponent } from './component/admin/paiement/paiement.component';
import { FormationComponent } from './component/admin/formation/formation.component';
=======

import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
>>>>>>> brancheMaxime
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';
<<<<<<< HEAD
import { GestionCoursComponent } from './component/admin/gestion-cours/gestion-cours.component';
=======
import { PageCommercialComponent } from './component/site/page-commercial/page-commercial.component';








>>>>>>> brancheMaxime

const routes: Routes = [

  
  {path:'adminCommercial', component:GestionCommercialComponent},
  {path:'utilisateur', component:GestionUtilisateurComponent},
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'adminFormateur',component:GestionFormateurComponent},
  {path:'adminCours',component:GestionCoursComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminAppel/:id',component:GestionAppelComponent},
  {path:'adminAppel',component:GestionAppelComponent},
  {path:'adminCommentaire/:id',component:GestionCommentaireComponent},
  {path:'adminCommentaire',component:GestionCommentaireComponent},
<<<<<<< HEAD
  {path:'gestionparticipant',component:GestionParticipantComponent},
  {path:'login',component:LoginComponent},
  {path:'gestionpaiements',component:PaiementComponent},
  {path:'gestionformations',component:FormationComponent}
];
=======
  {path:'pageCommercial',component:PageCommercialComponent},
  /*
 
  data:{
    role:'admin'
  }
  },*/
  ]





>>>>>>> brancheMaxime




@NgModule({
<<<<<<< HEAD
=======


  
>>>>>>> brancheMaxime
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



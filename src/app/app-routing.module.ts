import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';
import { GestionUtilisateurComponent } from './component/admin/gestion-utilisateur/gestion-utilisateur.component';
import { GestionProspectComponent } from './component/admin/gestion-prospect/gestion-prospect.component';
import { GestionAppelComponent } from './component/admin/gestion-appel/gestion-appel.component';
import { GestionCommentaireComponent } from './component/admin/gestion-commentaire/gestion-commentaire.component';
import { MenuAdminComponent } from './component/admin/menu-admin/menu-admin.component';
import { GestionFormateurComponent } from './component/admin/gestion-formateur/gestion-formateur.component';









const routes: Routes = [

  
  {path:'commercial', component:GestionCommercialComponent},
  {path:'utilisateur', component:GestionUtilisateurComponent},
  {path:'menuAdmin',component:MenuAdminComponent},
  {path:'adminFormateur',component:GestionFormateurComponent},
  {path:'adminProspect',component:GestionProspectComponent},
  {path:'adminAppel/:id',component:GestionAppelComponent},
  {path:'adminAppel',component:GestionAppelComponent},
  {path:'adminCommentaire/:id',component:GestionCommentaireComponent},
  {path:'adminCommentaire',component:GestionCommentaireComponent},
  /*
 
  data:{
    role:'admin'
  }
  },*/
  ]






@NgModule({


  
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

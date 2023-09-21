import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionParticipantComponent } from './component/admin/gestion-participant/gestion-participant.component';
import { LoginComponent } from './component/login/login.component';
import { PaiementComponent } from './component/admin/paiement/paiement.component';



const routes: Routes = [
  {path:'gestionparticipant',component:GestionParticipantComponent},
  {path:'login',component:LoginComponent},
  {path:'gestionpaiements',component:PaiementComponent},
 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



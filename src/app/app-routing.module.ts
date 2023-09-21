import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionCommercialComponent } from './component/admin/gestion-commercial/gestion-commercial.component';









const routes: Routes = [

  
  {path:'commercial', component:GestionCommercialComponent},

  /*
 {path:'afficherUsers', canActivate: [CanActivateService], component:GestionUsersComponent},
 {path:'afficherCitoyens', canActivate: [CanActivateService], component:GestionCitoyenComponent},
  {path:'afficherPass', canActivate: [CanActivateService], component:GestionPasseportComponent},
  {path:"gestionPasseport", component:GestionPasseportComponent,canActivate: [AuthentificationOK],
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

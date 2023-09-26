import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commercial } from 'src/app/models/commercial';
import { CommercialService } from 'src/app/service/site/commercial.service';

@Component({
  selector: 'app-gestion-commercial',
  templateUrl: './gestion-commercial.component.html',
  styleUrls: ['./gestion-commercial.component.css']
})
export class GestionCommercialComponent implements OnInit {

  listeCommercial!:Commercial[];
  commercial!:Commercial;

 
  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;
  // A regler les listes et autres attributs propres aux commerciaux

  // Utilisé pour l'affichage des appels conditionné par clic bouton
  afficherAppels: boolean = false;
  commercialSelectionne: any; // Variable pour suivre le commercial sélectionné
  listeAppels!:Appel[];


  constructor(private service:CommercialService, private router:Router){
  
  }

 
  
    ngOnInit(): void {

      this.commercial= new Commercial();
     this.listeAppels=[];
      this.listeCommercial=[];
     this.afficherCommerciaux();


    }
   
    //////////////////////////////////////////////////////////////////
    ////////////////////Methode liste appels commercial selec///////////
    //////////////////////////////////////////////////////////////////

    // Fonction pour basculer l'affichage des appels
    // changer vers id  commercial ! 
    toggleAfficherAppels(id: number) {
      for (let c of this.listeCommercial) {
        if (c.id === id) {
          
          this.listeAppels = c.appels;
        } 
      }
    }
/*
     //////////////////////////////////////////////////////////////////
    ////////////////////Methode liste commentaires commercial selec///////////
    //////////////////////////////////////////////////////////////////
En attente mais faisable
    toggleAfficherAppels(id: number) {
      for (let c of this.listeCommercial) {
        if (c.id === id) {
          
          this.listeAppels = c.appels;
        } 
      }
    }
*/

//////////////////////////////////////////////////////////////////////
    ////////////////////Methode affichage liste commerciaux///////////
    //////////////////////////////////////////////////////////////////
  
    afficherCommerciaux(){
      console.log("Meth afficher comm, admin gestion Commercial")
      this.service.getAllCommerciaux().subscribe(
        response=>{
          this.listeCommercial=response;
          console.log( this.listeCommercial)
        
    },
    error=>{console.log("erreur commercial")})
  }




//////////////////////////////////////////////////////////////////////
    ////////////////////Methode d'ajout de commercial///////////////////////
    //////////////////////////////////////////////////////////////////
    ajoutCommercial(){
      console.log("Meth ajout com, admin gestion Commercial")
      this.service.insererCommercial(this.commercial).subscribe(
        response=>{
          this.commercial=new Commercial();
          
          this.afficherCommerciaux();
      })



    }
    //////////////////////////////////////////////////////////////////////
    ////////////////////Methode de modification///////////////////////
    //////////////////////////////////////////////////////////////////


  modifierCommercial(id:number){
    console.log("Meth modifier, admin gestion Commercial")
    this.service.getById(id).subscribe(
      response=>{this.commercial=response
      }
    )
    // ajouter  dans la réponse ? ?
    // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
 // PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE MODIFICATION PAR SECURITE
 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
    }


    //////////////////////////////////////////////////////////////////
////////////////////Methode de suppression///////////////////////
//////////////////////////////////////////////////////////////////


supprimerCommercial(id:number){
  console.log("Methode supprimerCommercial, admin gestion")
this.service.deleteCommercial(id).subscribe(
response=>{
  this.afficherCommerciaux()
},
error=>console.log("erreur lors de la suppression")
)
// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
// PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE SUPPRESSION PAR SECURITE
// MEME CHOSE A FAIRE POUR LA METHODE MODIFIER
// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
}

selectCommercialParId(id:number){
  console.log("Meth selec par Id, admin gestion Commercial")
this.service.getById(id).subscribe(
  response=>{
    this.commercial=response
  },
  error=>console.log("erreur lors de la recherche")
)

}

  }
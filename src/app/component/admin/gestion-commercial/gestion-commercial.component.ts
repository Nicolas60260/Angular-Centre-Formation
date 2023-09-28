import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commercial } from 'src/app/models/commercial';
import { Prospect } from 'src/app/models/prospect';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CommercialService } from 'src/app/service/site/commercial.service';
import { ProspectService } from 'src/app/service/site/prospect.service';

@Component({
  selector: 'app-gestion-commercial',
  templateUrl: './gestion-commercial.component.html',
  styleUrls: ['./gestion-commercial.component.css']
})
export class GestionCommercialComponent implements OnInit {

  listeCommercial!:Commercial[];
  commercial!:Commercial;
  listeProspect!:Prospect[];
 
  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;
  // A regler les listes et autres attributs propres aux commerciaux

  // Utilisé pour l'affichage des appels conditionné par clic bouton
  afficherAppels: boolean = false;
  commercialSelectionne: any; // Variable pour suivre le commercial sélectionné
  listeAppels!:Appel[];
  erreurMail!: Boolean;
  erreurPhone!: Boolean;
  user!:Utilisateur;
  ajoutOk!:Boolean;

  constructor(private service:CommercialService, private router:Router,private titleService: Title, private servicepro:ProspectService){
  
  }

 
  
    ngOnInit(): void {
      let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
    console.log(this.user)
      this.titleService.setTitle("Gestion des commerciaux")
      this.commercial= new Commercial();
     this.listeAppels=[];
      this.listeCommercial=[];
      this.listeProspect=[];
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
         // this.listeProspect = Prospect[];
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
      if (this.user.role.nom === 'ADMIN'||this.user.role.nom === 'COMMERCIAL') {
        // L'utilisateur a le rôle ADMIN, autorisez l'accès à cette méthode
        
        console.log("Meth afficher comm, admin gestion Commercial")
      this.service.getAllCommerciaux().subscribe(
        response=>{
          this.listeCommercial=response;
          console.log( this.listeCommercial)
          
    },
    error=>{console.log("erreur commercial")})
      } else {
        // L'utilisateur n'a pas le rôle requis, affichez un message d'erreur ou effectuez une autre action appropriée.
        console.log("Vous n'avez pas les autorisations nécessaires pour accéder à cette méthode.");
      }
      
  }




//////////////////////////////////////////////////////////////////////
    ////////////////////Methode d'ajout de commercial///////////////////////
    //////////////////////////////////////////////////////////////////
    ajoutCommercial(){
      //init erreur
      this.erreurMail=false;
      this.erreurPhone=false;
      this.ajoutOk=false;
       // Récupère l'adresse e-mail depuis le formulaire
  const email = this.commercial.mail;

  // Vérifie le format de l'adresse e-mail
  if (!this.isValidEmail(email)) {
    this.erreurMail=true;
    console.error('Adresse e-mail invalide.');
    // Affiche un message d'erreur à l'utilisateur ou effectue une action appropriée
    return;}
    // Vérifie le format du num tel 
  // Récupère le numéro de téléphone depuis le formulaire
  const phoneNumber = this.commercial.telephone;

  // Vérifie le format du numéro de téléphone
  if (!this.isValidPhoneNumber(phoneNumber)) {
    console.error('Numéro de téléphone invalide.');
    this.erreurPhone=true;
    // Affiche un message d'erreur à l'utilisateur ou effectue une action appropriée
    return;
  }
    //Reste du traitement d'ajout
      console.log("Meth ajout com, admin gestion Commercial")
      this.service.insererCommercial(this.commercial).subscribe(
        response=>{
          this.commercial=new Commercial();
          this.ajoutOk=true;
          this.afficherCommerciaux();
      })



    }
    //////////////////////////////////////////////////////////////////////
    ////////////////////Methode de modification///////////////////////
    //////////////////////////////////////////////////////////////////


  modifierCommercial(id:number){


   // Récupérez l'utilisateur stocké dans sessionStorage
  const sessionUser = sessionStorage.getItem('username');
  
  // Vérifiez le rôle de l'utilisateur
  if (sessionUser) {
    const user = JSON.parse(sessionUser);
    
    // Maintenant, vous pouvez accéder au rôle de l'utilisateur
    const role = user.role;
    
    // Utilisez le rôle pour gérer les autorisations
    if (role === 'ADMIN') {
      // L'utilisateur est un administrateur, vous pouvez effectuer des opérations
      console.log("L'utilisateur est un administrateur.");
      
      // Continuez avec votre logique pour récupérer et modifier le commercial
      this.service.getById(id).subscribe(
        response => {
          this.commercial = response;
          // Effectuez les opérations nécessaires ici
        }
      );
    } else {
      // L'utilisateur n'a pas les autorisations nécessaires
      console.log("L'utilisateur n'est pas un administrateur.");
      // Vous pouvez afficher un message d'erreur ou effectuer une autre action appropriée.
    }
  } else {
    // L'utilisateur n'est pas connecté ou il n'y a pas de session active
    console.log("Aucune session d'utilisateur n'est active.");
    // Vous pouvez afficher un message d'erreur ou effectuer une autre action appropriée.
  }
}




    // ajouter  dans la réponse ? ?
    // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
 // PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE MODIFICATION PAR SECURITE
 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
    


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

isValidPhoneNumber(phoneNumber: string): boolean {
  // Utilisation d'une expression régulière pour vérifier le format du numéro de téléphone
  // Cette expression régulière correspond à un numéro de téléphone français, mais tu peux l'adapter à tes besoins
  const phoneRegex = /^0[1-9][0-9]{8}$/;
  return phoneRegex.test(phoneNumber);
}

 isValidEmail(mail: string): boolean {
  // Utilisation d'une expression régulière pour vérifier le format de l'adresse e-mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(mail);
} 

}


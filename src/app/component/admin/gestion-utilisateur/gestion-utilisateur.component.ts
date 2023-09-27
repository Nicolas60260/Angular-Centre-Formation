import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {

 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
 // PENSER A CREER LE PATH QUI RESERVE L'ACCES A LA PP DES METHODES POUR ADMIN
 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
// CREER UNE METHODE POUR RENSEIGNER LE ROLE DE L'UTILISATEUR EN FONCTION DE L'ID DU ROLE. 
// TRADUCTION MANUELLE OBLIGATOIRE EN SAHHH

  listeUtilisateur!:Utilisateur[];
  utilisateur!:Utilisateur;

  
  username!:string;
 password!:string;


  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;





  constructor(private service:UtilisateurService, private router:Router
    ,private titleService: Title,){
  
  }

  
  
    ngOnInit(): void {
      this.titleService.setTitle("Gestion des utilisateurs")
      this.listeUtilisateur=[];
      this.afficherUtilisateurs();
      
      this.utilisateur= new Utilisateur();
      
      
     

    }

    

//////////////////////////////////////////////////////////////////////
    ////////////////////Methode affichage liste utilisateurs///////////
    //////////////////////////////////////////////////////////////////
  
    afficherUtilisateurs(){
      console.log("Meth afficher users, admin gestion Utilisateur")
      this.service.getAllUtilisateurs().subscribe(
        response=>{this.listeUtilisateur=response},
        error=>{console.error("Impossible d'afficher la liste des utilisateurs");
        })
  }




//////////////////////////////////////////////////////////////////////
    ////////////////////Methode d'ajout de utilisateur///////////////////////
    //////////////////////////////////////////////////////////////////
    ajoutUtilisateur(){
      
      console.log("Meth ajout user, admin gestion utilisateur")
      this.utilisateur.password="mdp";
      this.service.insererUtilisateur(this.utilisateur).subscribe(
        response=>{
          this.afficherUtilisateurs();
          this.utilisateur=new Utilisateur();
         
      })



    }
    //////////////////////////////////////////////////////////////////////
    ////////////////////Methode de modification///////////////////////
    //////////////////////////////////////////////////////////////////


  modifierUtilisateur(utilisateur:Utilisateur){
    this.utilisateur = utilisateur,
  this.afficherUtilisateurs()}
//     console.log("Meth modifier, admin gestion utilisateur")
//     this.service.getById(id).subscribe(
//       response=>this.utilisateur=response
//     )
//     // ajouter this.afficherUtilisateurs() dans la réponse ? ?
//     // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
//  // PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE MODIFICATION PAR SECURITE
//  // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
//     }


//     //////////////////////////////////////////////////////////////////
// ////////////////////Methode de suppression///////////////////////
// //////////////////////////////////////////////////////////////////


supprimerUtilisateur(id:number){
  console.log("Methode supprimerUtilisateur, admin gestion")
this.service.deleteUtilisateur(id).subscribe(
response=>{
  this.afficherUtilisateurs()
},
error=>console.log("erreur lors de la suppression")
)
// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
// PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE SUPPRESSION PAR SECURITE
// MEME CHOSE A FAIRE POUR LA METHODE MODIFIER
// /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
}

selectUtilisateurParId(id:number){
  console.log("Meth selec par Id, admin gestion Utilisateur")
this.service.getById(id).subscribe(
  response=>{
    this.utilisateur=response
  },
  error=>console.log("erreur lors de la recherche")
)

}
}

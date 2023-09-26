import { Component, OnInit } from '@angular/core';
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
  Utilisateur!:Utilisateur;

  
  username!:string;
 password!:string;


  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;





  constructor(private service:UtilisateurService, private router:Router){
  
  }

  
  
    ngOnInit(): void {
      this.listeUtilisateur=[];
      this.afficherUtilisateurs();
      
      this.Utilisateur= new Utilisateur;
      
      
     

    }

    

//////////////////////////////////////////////////////////////////////
    ////////////////////Methode affichage liste utilisateurs///////////
    //////////////////////////////////////////////////////////////////
  
    afficherUtilisateurs(){
      console.log("Meth afficher users, admin gestion Utilisateur")
      this.service.getAllUtilisateurs().subscribe(
        response=>{this.listeUtilisateur=response
        
    })
  }




//////////////////////////////////////////////////////////////////////
    ////////////////////Methode d'ajout de utilisateur///////////////////////
    //////////////////////////////////////////////////////////////////
    ajoutUtilisateur(){
      
      console.log("Meth ajout user, admin gestion Utilisateur")
      this.Utilisateur.password="mdp";
      this.service.insererUtilisateur(this.Utilisateur).subscribe(
        response=>{
          this.afficherUtilisateurs();
          this.Utilisateur=new Utilisateur();
         
      })



    }
    //////////////////////////////////////////////////////////////////////
    ////////////////////Methode de modification///////////////////////
    //////////////////////////////////////////////////////////////////


  modifierUtilisateur(id:number){
    console.log("Meth modifier, admin gestion Utilisateur")
    this.service.getById(id).subscribe(
      response=>this.Utilisateur=response
    )
    // ajouter this.afficherUtilisateurs() dans la réponse ? ?
    // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
 // PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE MODIFICATION PAR SECURITE
 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
    }


    //////////////////////////////////////////////////////////////////
////////////////////Methode de suppression///////////////////////
//////////////////////////////////////////////////////////////////


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
    this.Utilisateur=response
  },
  error=>console.log("erreur lors de la recherche")
)

}
}

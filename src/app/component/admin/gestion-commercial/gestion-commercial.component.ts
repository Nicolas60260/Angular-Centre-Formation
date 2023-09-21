import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/commercial';
import { CommercialService } from 'src/app/service/site/commercial.service';

@Component({
  selector: 'app-gestion-commercial',
  templateUrl: './gestion-commercial.component.html',
  styleUrls: ['./gestion-commercial.component.css']
})
export class GestionCommercialComponent implements OnInit {

  listeCommercial!:Commercial[];
  Commercial!:Commercial;

 
  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;
  // A regler les listes et autres attributs propres aux commerciaux

  idCat!: number;
  idUser!: number;
  imageFile!: File;
 formData = new FormData();
  constructor(private service:CommercialService, private router:Router){
  
  }

  
  
    ngOnInit(): void {
     
     this.afficherCommerciaux();

    }
  
    afficherCommerciaux(){
      this.service.getAllCommerciaux().subscribe(
        response=>{this.listeCommercial=response
        
    })
  }







//////////////////////////////////////////////////////////////////////
    ////////////////////Methode d'ajout de commercial///////////////////////
    //////////////////////////////////////////////////////////////////
    ajoutCommercial(){

      this.service.insererCommercial(this.Commercial).subscribe(
        response=>{
          this.Commercial=new Commercial();
          //this.service.getAllCommerciaux()
      })



    }
    
// Commentaire = SUPPRIMER POUR DEBLOQUER LES METHODES
    /*
//////////////////////////////////////////////////////////////////////
    ////////////////////Methode de modification///////////////////////
    //////////////////////////////////////////////////////////////////


  modifierCommercial(id:number){
      
    this.service.getById(id).subscribe(
      response=>this.Commercial=response
    )
    // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
 // PENSER A INSERER UNE ALERTE POUR CONFIRMER LE CHOIX DE MODIFICATION PAR SECURITE
 // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
    }


//////////////////////////////////////////////////////////////////
////////////////////Methode de suppression///////////////////////
//////////////////////////////////////////////////////////////////


    supprimerCommercial(id:number){
      console.log("Methode supprimerCommercial, admin gestion")
  this.service.supprimerCommercial(id).subscribe(
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





    //////////////////////////////////////////////////////////////////
    ////////////////////Foutoir à méthodes////////////////////////////
    //////////////////////////////////////////////////////////////////
      /*this.service.modifPasseport(this.Passeport).subscribe(
  response=>{
    this.Passeport=new Passeport();
    this.afficherAll()
  }
  
      );
 // this.router.navigate(['/afficherPass']);
  /*
    afficherAll()
    {
  this.service.getAll().subscribe(
    response=>{this.listePasseports=response
    for(let i=0;i<this.listePasseports.length;i++)
    {
      this.citoyenService.getCitByPassId(this.listePasseports[i].id).subscribe(
        response2=>this.listePasseports[i].citoyen=response2
      )
    }
    });
  
    }
  
    supprimerPasseport(id:number){
      console.log("Dans meth suppgestionPasseport")
  this.service.deletePasseport(id).subscribe(
    response=>{
      this.afficherAll()
    },
    error=>console.log("erreur lors de la suppression")
  )
  
    }
  
    ajouterPass(){
      this.service.insererPasseport(this.Passeport,this.idCit).subscribe(
  response=>{
    this.Passeport=new Passeport();
    this.afficherAll()
  
  },
  err=>console.log("Problème survenu lors de l'ajout de la Passeport")
  
      );
      
    }
  
    */
  
      
    

    // Redirige vers page

/*    afficherCits() {
    this.service.getListPassVide().subscribe(
      response=>this.listeCitoyens=response
    );
    // Utilisez la méthode navigate pour aller vers le composant désiré
    }*/
/*
**************INUTILE*************
    attribPass(){

      this.service.getListPassVide.subscribe(
        response=>this.listePasseports=response);
    }*/

    // formulaire ajout passeport on utilise la methode findbynull*/
  
  }
import { Component,OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { FormationService } from 'src/app/service/site/formation.service';

import { ParticipantService } from 'src/app/service/site/participant.service';

@Component({
  selector: 'app-gestion-participant',
  templateUrl: './gestion-participant.component.html',
  styleUrls: ['./gestion-participant.component.css']
})

export class GestionParticipantComponent implements OnInit{

  ListeParticipant!:Participant[];
  ParticipantAAjouter!:Participant;
  ParticipantAModifier!:Participant;
  Message!:String;
  ListePaiement!:Paiement[];
  SommeRestantAPayer!:number;
  ListeFormation!:Formation[];
  listeIdFormation!:number[];
  checkboxValue: boolean = false;
  PrixDueTotal:number=0;

  constructor(private pservice:ParticipantService,private fservice:FormationService){}

  ngOnInit() : void{// méthode provenant de OnInit à redéfinir
   
    this.afficherLesParticipants();
    this.ParticipantAAjouter=new Participant();
    this.ParticipantAAjouter.formations=[];
    this.ListePaiement=[];
    this.afficherFormations();
    this.listeIdFormation = [];
    // this.checkboxValue= false;
    
   }


   afficherLesParticipants(){
    this.pservice.afficherParticipant().subscribe(
      response => {
        this.ListeParticipant = response;
        for (let i=0;i<this.ListeParticipant.length;i++){
          for (let j=0;j<this.ListeParticipant[i].formations.length;j++){
            this.PrixDueTotal +=  this.ListeParticipant[i].formations[j].prix
          }
          this.ListeParticipant[i].sommeDue=this.PrixDueTotal;
          this.PrixDueTotal=0;
        }
      }
    )
  }
  /* ajouterParticipant(form:any){

    console.log(this.listeIdFormation);
    for(let i of this.listeIdFormation)
    {
      for(let forma  of this.ParticipantAAjouter.formations)
      {
        if(!this.listeIdFormation.includes(forma.id))
        {
          let f=new Formation();
          f.id=i;
    
          this.ParticipantAAjouter.formations.push(f);
        }

      }
     
    }*/

  ajouterParticipant(form:any){

    console.log(this.listeIdFormation);
    for(let i of this.listeIdFormation)
    {
      
      let f=new Formation();
      f.id=i;

      this.ParticipantAAjouter.formations.push(f);
    }

    console.log(this.ParticipantAAjouter.formations);
    
    this.pservice.ajouterParticipant(this.ParticipantAAjouter).subscribe(

      response =>{
        console.log(response);
        this.afficherLesParticipants();

        this.ParticipantAAjouter.formations=[];
        this.listeIdFormation = [];
        // this.checkboxValue= false;
        form.reset();
        
      }
    )
    
  }

  supprimerParticipant(id:number){
    this.pservice.supprimerParticipant(id).subscribe(
      response=>{
        console.log(response)
        this.afficherLesParticipants()
      }
    )
  }

  modifierParticipant(p:Participant){
    
    this.ParticipantAAjouter = p;
    for(let forma  of this.ParticipantAAjouter.formations)
    {
      //idformUser.push(forma.id)
      this.listeIdFormation.push(forma.id);
    }
    this.afficherLesParticipants();
  }

  paiementsParticipant(p:Participant){
    this.Message="";
    if(p.paiements.length == 0){
      this.Message="Ce participant n'a encore rien payé"
    }
    this.ListePaiement=p.paiements
  }

  effacerPaiement(){
    this.ListePaiement=[]
  }

  restantAPayerParticipant(p:Participant){
    let somme =0
    for (let i = 0; i < p.paiements.length; i++) {
      somme+= p.paiements[i].montant
    }

    this.SommeRestantAPayer=p.sommeDue-somme
    console.log(this.SommeRestantAPayer)
  }

  afficherFormations(){
    this.fservice.afficherLesFormations().subscribe(
      response =>{
        this.ListeFormation = response;

      }
    )
  }

  toggleSelection(id:number){
    //let idformUser=[];
    
    if(this.listeIdFormation.includes(id)){
      this.listeIdFormation=this.listeIdFormation.filter(i=>i!=id);
    }
    else
    {
      this.listeIdFormation.push(id);
    }
    console.log(this.listeIdFormation);
  }


  EnleverParticipantFormations(p:Participant){
    console.log(p.formations)
    p.formations=[]
    this.pservice.ajouterParticipant(p).subscribe(
      response=>{
        console.log(response);
        this.afficherLesParticipants();
      }
    )
  }


 

  

 
}

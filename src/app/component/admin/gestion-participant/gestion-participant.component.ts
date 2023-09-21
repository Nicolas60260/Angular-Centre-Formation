import { Component,OnInit } from '@angular/core';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';

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

  constructor(private pservice:ParticipantService){}

  ngOnInit() : void{// méthode provenant de OnInit à redéfinir
   
    this.afficherLesParticipants();
    this.ParticipantAAjouter=new Participant();
    this.ListePaiement=[];
   }


   afficherLesParticipants(){
    this.pservice.afficherParticipant().subscribe(
      response => {
        this.ListeParticipant = response;
        
        
      }
    )
  }

 

  ajouterParticipant(){
    this.pservice.ajouterParticipant(this.ParticipantAAjouter).subscribe(
      response =>{
        console.log(response);
        this.afficherLesParticipants();
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

  }
}

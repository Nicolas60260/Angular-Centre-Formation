
import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/service/site/paiement.service';
import { Component,OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/service/site/participant.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit{

  ListePaiements!:Paiement[];
  PaiementAAjouter!:Paiement;
  ListeParticipants!:Participant[];
  ParticipantParIdPaiement!:Participant;
  erreurAjout!:boolean;

  constructor(private pservice:PaiementService,private paservice:ParticipantService,private titleService: Title){}
  ngOnInit(): void {
    this.titleService.setTitle("Gestion participant")
    this.afficherPaiements();
    this.PaiementAAjouter=new Paiement();
    this.PaiementAAjouter.participant=new Participant();
    this.afficherParticipant();
   
  }

  afficherPaiements(){
    this.pservice.afficherPaiement().subscribe(
      response=>{
        this.ListePaiements=response;
        for (let i = 0; i < this.ListePaiements.length; i++) {
          
             this.paservice.afficherParticipantParIdPaiement(this.ListePaiements[i].id).subscribe(
             response =>{
               this.ListePaiements[i].participant=response;
            
             }
           )

        }
      }
    )
  }
checkpaiement(p:Paiement){

  if (p.montant == 0 || p.montant == null){
    this.erreurAjout = true
   }
   
   if (p.montant>0){ this.ajouterPaiement(p)}
}
  ajouterPaiement(p:Paiement){
   
    console.log(this.PaiementAAjouter.participant.nom)
    this.pservice.ajouterPaiement(p).subscribe(
      response=>{
        console.log(response)
        this.afficherPaiements();
      }
    )
  }

  supprimerPaiement(id:number){
    this.pservice.supprimerPaiement(id).subscribe(
      response =>{
        console.log(response)
        this.afficherPaiements()
      }
    )
  }

  modifierPaiement(p:Paiement){
    this.PaiementAAjouter=p
  }

  // function afficherParticipant (idPaiement:number): Participant{
  //   this.paservice.afficherParticipant().subscribe(
  //     response =>{
  //       this.ListeParticipants=response

  //       let ParticipantATrouver = new Participant();

  //       for (let i = 0; i < this.ListeParticipants.length; i++) {
  //         for (let j = 0; j < this.ListeParticipants[i].paiements.length; j++) {
  //           if(this.ListeParticipants[i].paiements[j].id==idPaiement){
  //             ParticipantATrouver=this.ListeParticipants[i];
  //             break;
  //           }
  //         }
  //       }
  //       return ParticipantATrouver;
  //     }
  //   )
  // }

  afficherParticipant(){
    this.paservice.afficherParticipant().subscribe(
      response =>{
        this.ListeParticipants=response;
      }
    )
  }

  // afficherParticipantParIdPaiement(idPaiement:number){ // méthode ne marchant pas à cause du fait que le programme n'attend pas la réponse --> traitement asynchrone
  //   this.paservice.afficherParticipantParIdPaiement(idPaiement).subscribe(
  //     response =>{
  //       this.ParticipantParIdPaiement=response;
        

        
  //     }
  //   )
    
  // }

}

import { CommaExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';
import { Commercial } from 'src/app/models/commercial';
import { Prospect } from 'src/app/models/prospect';
import { AppelService } from 'src/app/service/site/appel.service';
import { CommercialService } from 'src/app/service/site/commercial.service';
import { ProspectService } from 'src/app/service/site/prospect.service';

@Component({
  selector: 'app-gestion-appel',
  templateUrl: './gestion-appel.component.html',
  styleUrls: ['./gestion-appel.component.css']
})
export class GestionAppelComponent implements OnInit {
  listeAppel!:Appel[];
  listeCommercial !:Commercial[];
  listeProspect !:Prospect[];
  appel!:Appel;
  
  
  constructor(private appelService:AppelService
    , private commercialService:CommercialService
    ,private prospectService:ProspectService){}

  ngOnInit(): void {
    this.afficherAll();
    this.afficherCommercial();
    this.afficherProspect();
    this.appel=new Appel();
    this.appel.commentaire = new Commentaire();
    this.appel.commercial=new Commercial();
    this.appel.prospect = new Prospect();
  }
  

  afficherAll(){
    this.appelService.getall().subscribe(
      response => { this.listeAppel = response },
      error => (console.error("Impossible d'afficher la liste des appels"))
    )
  }
  afficherCommercial(){
    this.commercialService.getall().subscribe(
      response => {this.listeCommercial=response;
      },
      error=>{console.error("Impossible d'afficher la liste des commerciaux");
      }
    )
  }
  afficherProspect(){
    this.prospectService.getall().subscribe(
      response => {this.listeProspect=response;
      },
      error=>{console.error("Impossible d'afficher la liste des prospects");
      }
    )
  }

  enregistrerAppel(){
    this.appelService.addAppel(this.appel).subscribe(
      response => {this.appel= new Appel()
        ,this.appel.commentaire = new Commentaire()
        ,this.appel.commercial=new Commercial()
        ,this.appel.prospect = new Prospect()
        ,this.afficherAll();  console.log("Appel enregistré");  },
      error => {console.error("Impossible d'enregistrer l'appel")}
    )
  }

  supprimerAppel(id:number){
    this.appelService.deleteAppel(id).subscribe(
      response => {console.log("Appel #" +id+" supprimé avec succès" ),this.afficherAll()},
      error=> {console.error("Impossible de supprimer l'appel")}
    )
  }

  modifierAppel(appel: Appel){
    this.appel= appel;
    this.afficherAll();
  }
}

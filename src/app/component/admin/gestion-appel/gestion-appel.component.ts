import { CommaExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  listeAppel!: Appel[];
  listeCommercial !: Commercial[];
  listeProspect !: Prospect[];
  appel!: Appel;
  idcible!: number;
  heure!: string;


  constructor(private appelService: AppelService
    , private commercialService: CommercialService
    , private prospectService: ProspectService
    , private ActRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.appel = new Appel();
    this.appel.debutAppel = new Date();

    this.idcible = this.ActRoute.snapshot.params["id"];
    this.afficherAll();
    this.afficherCommercial();
    this.afficherProspect();
    this.heure = "";
    this.appel.commentaire = new Commentaire();
    this.appel.commercial = new Commercial();
    this.appel.prospect = new Prospect();

  }



  TimeChange() {
    if (this.heure) {
      console.log(this.heure);
      console.log(typeof this.appel.debutAppel);
      console.log(this.appel);


      const [heures, minutes] = this.heure.split(':');
      this.appel.debutAppel.setHours(parseInt(heures, 10));
      this.appel.debutAppel.setMinutes(parseInt(minutes, 10));
      console.log(this.appel.debutAppel);

    } else {
      this.appel.debutAppel = new Date();
    }
  }

  afficherAll() {
    if (this.idcible != undefined) {
      this.appelService.getByProspectId(this.idcible).subscribe(
        response => {
          this.appel = new Appel()
            , this.heure = ""
            , this.appel.commentaire = new Commentaire()
            , this.appel.commercial = new Commercial()
            , this.appel.prospect = new Prospect()
            , this.appel.debutAppel = new Date()
            , this.listeAppel = response
        },
        error => { console.error("Impossible d'afficher les commentaires du prospect") }
      )
    } else {
      this.appelService.getall().subscribe(
        response => { this.listeAppel = response },
        error => (console.error("Impossible d'afficher la liste des appels"))
      )
    }
  }
  afficherCommercial() {
    this.commercialService.getAllCommerciaux().subscribe(
      response => {
        this.listeCommercial = response;
      },
      error => {
        console.error("Impossible d'afficher la liste des commerciaux");
      }
    )
  }
  afficherProspect() {
    this.prospectService.getall().subscribe(
      response => {
        this.listeProspect = response;
      },
      error => {
        console.error("Impossible d'afficher la liste des prospects");
      }
    )
  }


  enregistrerAppel() {
    console.log(this.heure)
    if (typeof this.appel.debutAppel === 'string') {
      // Convertir la chaîne en un objet Date
      console.log(this.appel.debutAppel);
      const dateString = this.appel.debutAppel;
      console.log(this.appel.debutAppel);
    }
    this.appel.debutAppel = new Date(this.appel.debutAppel);
    this.TimeChange();

    this.appelService.addAppel(this.appel).subscribe(
      response => {
        console.log(this.appel)
          , this.heure = ""
          , this.appel = new Appel()
          , this.appel.commentaire = new Commentaire()
          , this.appel.commercial = new Commercial()
          , this.appel.prospect = new Prospect()
          , this.appel.debutAppel = new Date()
          , this.afficherAll(); console.log("Appel enregistré");
      },
      error => { console.error("Impossible d'enregistrer l'appel") }
    )
  }

  supprimerAppel(id: number) {
    this.appelService.deleteAppel(id).subscribe(
      response => { console.log("Appel #" + id + " supprimé avec succès"), this.afficherAll() },
      error => { console.error("Impossible de supprimer l'appel") }
    )
  }

  modifierAppel(appel: Appel) {
    appel.debutAppel = new Date(appel.debutAppel)

// Forcer TypeScript à traiter appel.debutAppel comme une chaîne
const dateAsString: string = appel.debutAppel.toISOString();;

if (typeof dateAsString === 'string') {
  // Séparation de la date (première partie)
  const datePart = dateAsString.substring(0, 10);

  // Séparation de l'heure (deuxième partie)
  const heurePart = dateAsString.substring(11, 16);

  console.log("Date:", datePart); // Affiche "Date: 2023-09-23"
  console.log("Heure:", heurePart); // Affiche "Heure: 13:41"
  this.heure = heurePart;
  this.appel.debutAppel = appel.debutAppel;
  console.log(this.appel.debutAppel)
}


    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
    const dateFormatted = this.appel.debutAppel.toLocaleDateString('fr-FR', options);

    this.appel = appel;
    if (this.appel.commentaire == null) {
      this.appel.commentaire = new Commentaire();
    }
    this.appel = appel;
    if (this.appel.commercial == null) {
      this.appel.commercial = new Commercial();
    }
    this.appel = appel;
    if (this.appel.prospect == null) {
      this.appel.prospect = new Prospect();
    }
    this.afficherAll();
  }
}

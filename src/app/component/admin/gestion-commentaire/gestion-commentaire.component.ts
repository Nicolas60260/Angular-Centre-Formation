import { Component, OnInit } from '@angular/core';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';
import { Commercial } from 'src/app/models/commercial';
import { Prospect } from 'src/app/models/prospect';
import { AppelService } from 'src/app/service/site/appel.service';
import { CommentaireService } from 'src/app/service/site/commentaire.service';
import { CommercialService } from 'src/app/service/site/commercial.service';
import { ProspectService } from 'src/app/service/site/prospect.service';

@Component({
  selector: 'app-gestion-commentaire',
  templateUrl: './gestion-commentaire.component.html',
  styleUrls: ['./gestion-commentaire.component.css']
})
export class GestionCommentaireComponent implements OnInit {
  listeCommentaire!: Commentaire[];
  commentaire!: Commentaire;
  listeCommercial !: Commercial[];
  listeProspect !: Prospect[];
  listeAppel !:Appel[];

  constructor(private commentaireService: CommentaireService
    , private commercialService: CommercialService
    , private prospectService: ProspectService
    ,private appelService:AppelService) { }

  ngOnInit(): void {
    this.afficherAll();
    this.afficherCommercial();
    this.afficherProspect();
    this.afficherAppel();
    this.commentaire=new Commentaire();
    this.commentaire.commercial=new Commercial();
    this.commentaire.prospect = new Prospect();
    this.commentaire.appel=new Appel();

  }

  afficherAll() {
    this.commentaireService.getAll().subscribe(
      response => { this.listeCommentaire = response },
      error => (console.error("Impossible d'afficher la liste des commentaire")
      )
    )
  }
  afficherCommercial() {
    this.commercialService.getall().subscribe(
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
  afficherAppel(){
    this.appelService.getall().subscribe(
      response => { this.listeAppel = response },
      error => (console.error("Impossible d'afficher la liste des appels"))
    )
  }
  supprimerCommentaire(id: number) {
    this.commentaireService.deleteCommentaire(id).subscribe(
      response => {
        console.log("Commentaire #" + id + " supprimé avec succès."), this.afficherAll();
      },
      error => {
        console.error("Impossible de supprimer le commentaire");
      }
    )
  }

  enregistrerCommentaire() {
    this.commentaireService.addCommentaire(this.commentaire).subscribe(
      response => { console.log("commentaire ajouté avec succès")
      ,console.log(this.commentaire), this.afficherAll() },
      error => {
        console.error("Impossible d'enregistrer le commentaire");
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';
import { Commercial } from 'src/app/models/commercial';
import { Prospect } from 'src/app/models/prospect';
import { Utilisateur } from 'src/app/models/utilisateur';
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
  listeAppel !: Appel[];
  listeAppelUser !: Appel[];
  idcible!: number;
  formGroup: any;
  user !:Utilisateur;

  constructor(private commentaireService: CommentaireService
    , private commercialService: CommercialService
    , private prospectService: ProspectService
    , private appelService: AppelService
    , private ActRoute: ActivatedRoute
    ,private titleService: Title) { }

  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : undefined;
    this.titleService.setTitle("Gestion des commentaires");
    this.idcible = this.ActRoute.snapshot.params["id"];
    if (this.user.role.nom == 'COMMERCIAL') {
      this.getAppeluser(this.user.id);
    }
    this.afficherAll();
    this.afficherCommercial();
    this.afficherProspect();
    this.afficherAppel();
    this.commentaire = new Commentaire();
    this.commentaire.commercial = new Commercial();
    this.commentaire.prospect = new Prospect();
    this.commentaire.appel = new Appel();
  }

  onSubmit() {
    const requestBody: Commentaire = {};

    if (this.formGroup.get('id').value !== null) {
      requestBody.id = this.formGroup.get('id').value;
    }
    if (this.formGroup.get('texte').value !== null) {
      requestBody.texte = this.formGroup.get('texte').value;
    }
    if (this.formGroup.get('date').value !== null) {
      requestBody.date = this.formGroup.get('date').value;
    }
    if (this.formGroup.get('commercial').value !== null) {
      requestBody.commercial = this.formGroup.get('commercial').value;
    }
    if (this.formGroup.get('prospect').value !== null) {
      requestBody.prospect = this.formGroup.get('prospect').value;
    }
    if (this.formGroup.get('appel').value !== null) {
      requestBody.appel = this.formGroup.get('appel').value;
    }
  }

  afficherAll() {
    if (this.idcible != undefined) {
      this.commentaireService.getByProspectId(this.idcible).subscribe(
        response => {
          this.listeCommentaire = response
            , this.attribuerAppel()
            , this.commentaire = new Commentaire()
            , this.commentaire.commercial = new Commercial()
            , this.commentaire.prospect = new Prospect()
            , this.commentaire.appel = new Appel()
        },
        error => { console.error("Impossible d'afficher les commentaires du prospect") }
      )
    } else {
      this.commentaireService.getAll().subscribe(
        response => {
          this.listeCommentaire = response,
            this.attribuerAppel(),
            console.log(this.listeCommentaire)
            , this.commentaire = new Commentaire()
            , this.commentaire.commercial = new Commercial()
            , this.commentaire.prospect = new Prospect()
            , this.commentaire.appel = new Appel()
        },
        error => (console.error("Impossible d'afficher la liste des commentaire")
        )
      )
    }
  }

  attribuerAppel() {
    this.listeCommentaire.forEach(commentaire => {
      if (commentaire.id != undefined) {

        this.commentaireService.getAppel(commentaire.id).subscribe(
          response => { commentaire.appel = response },
          error => {
            console.error("Impossible d'attribuer les annonces");
          }
        )
      }
    })
  }

  getAppeluser(id:number){
    this.appelService.getAppelByCommercial(id).subscribe(
      response=>{this.listeAppelUser=response, console.log(this.listeAppelUser)},
      error=> {console.error("Impossible d'obtenir la liste des appels de l'utilisateur");
      }
    )
  }
  comAppelExiste(appel:Appel): boolean {
      let valid = false;
      for (let index = 0; index < this.listeAppelUser.length; index++) {
      if (this.listeAppelUser[index].id == appel.id) {
        valid = true;
        break;
      }
        
      }
      return valid;
    
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
  afficherAppel() {
    this.appelService.getByCommentaireNull().subscribe(
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
      response => {
        console.log("commentaire ajouté avec succès")

          , console.log(this.commentaire), this.afficherAll(),this.afficherAppel()
      },
      error => {
        console.error("Impossible d'enregistrer le commentaire", console.log(this.commentaire));
      }
    )
  }

  modifierCommentaire(commentaire:Commentaire){
    this.commentaire = commentaire;
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CoursService } from 'src/app/service/site/cours.service';
import { FormateurService } from 'src/app/service/site/formateur.service';
import { FormationService } from 'src/app/service/site/formation.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  idcible!: number;
  ListeFormation!: Formation[]
  FormationAAjouter!: Formation
  ListeCours!: Cours[]
  ListeIdCours!: number[];
  ListeFormateur !: Formateur[];
  user!:Utilisateur

  constructor(private fservice: FormationService
    ,private formateurService: FormateurService
    , private cservice: CoursService
    , private ActRoute: ActivatedRoute
    , private titleService: Title) { }





  ngOnInit(): void {
<<<<<<< HEAD

    this.afficherFormation()
    this.FormationAAjouter = new Formation();
    this.FormationAAjouter.cours = []
    this.afficherCours();
    this.ListeIdCours=[];
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();

    }

    afficherFormation(){
      
=======
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
    this.titleService.setTitle("Gestion des formations")
    this.afficherFormation();
    this.afficherFormateur();
    this.idcible = this.ActRoute.snapshot.params["id"];
    this.FormationAAjouter = new Formation();
    this.FormationAAjouter.cours = [];
    this.FormationAAjouter.formateur = new Formateur();
    
    this.afficherCours();
    this.ListeIdCours = [];
  }
>>>>>>> master

  afficherFormation() {
    if (this.idcible != undefined) {
      this.fservice.afficherFormationParFormateur(this.idcible).subscribe(
        response => { this.ListeFormation = response },
        error => {
          console.error("Impossible d'afficher la liste des formations");
        }
      )
    } else {
      this.fservice.afficherLesFormations().subscribe(
        response => {
          this.ListeFormation = response;
        },
        error => { console.error("Impossible d'afficher la liste des formations") }
      )
    }
  }

  afficherFormateur(){
    this.formateurService.getAll().subscribe(
      response=>{this.ListeFormateur = response},
      error=> {console.error("Impossible d'afficher la liste des formateurs");
      }
    )
  }
  supprimerFormation(id: number) {
    this.fservice.supprimerLesFormations(id).subscribe(
      response => {
        console.log(response)
        this.afficherFormation();
      }
    )
  }

  ajouterFormation() {

    for (let c of this.ListeIdCours) {

      let cour = new Cours();
      cour.id = c;
      this.FormationAAjouter.cours.push(cour);

    }

    this.fservice.ajouterFormation(this.FormationAAjouter).subscribe(
      response => {

        console.log(response)
        this.afficherFormation();
        this.FormationAAjouter.cours = [];
        this.ListeIdCours = [];
        this.FormationAAjouter = new Formation();
        this.FormationAAjouter.formateur = new Formateur()
      }
    )
  }

  modifierFormation(f: Formation) {
    if (f.formateur==null) {
      f.formateur = new Formateur();
    }
    console.log(this.FormationAAjouter.formateur.id);
    
    this.FormationAAjouter = f;
  }

  afficherCours() {
    this.cservice.getAll().subscribe(
      response => {

        this.ListeCours = response;
        this.afficherFormation();

      }
    )
  }

  toggleSelection(id: number) {

    if (this.ListeIdCours.includes(id)) {
      this.ListeIdCours = this.ListeIdCours.filter(n => n != id);
    } else {
      this.ListeIdCours.push(id);
    }
    console.log(this.ListeIdCours)
  }



  EnleverCoursFormations(f: Formation) {

    f.cours = []
    this.fservice.ajouterFormation(f).subscribe(
      response => {
        console.log(response);
        this.afficherFormation();
      }
    )
  }

}



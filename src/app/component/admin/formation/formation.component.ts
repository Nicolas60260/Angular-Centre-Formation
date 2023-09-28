import { Component,OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { Formation } from 'src/app/models/formation';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CoursService } from 'src/app/service/site/cours.service';
import { FormationService } from 'src/app/service/site/formation.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{

  ListeFormation!:Formation[]
  FormationAAjouter!:Formation
  ListeCours!:Cours[]
  ListeIdCours!:number[]
  user!:Utilisateur

  constructor(private fservice:FormationService, private cservice: CoursService){}

  ngOnInit(): void {

    this.afficherFormation()
    this.FormationAAjouter = new Formation();
    this.FormationAAjouter.cours = []
    this.afficherCours();
    this.ListeIdCours=[];
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();

    }

    afficherFormation(){
      

      this.fservice.afficherLesFormations().subscribe(
        response=>{
          this.ListeFormation=response;
        }
      )
    }
    supprimerFormation(id:number){
      this.fservice.supprimerLesFormations(id).subscribe(
        response =>{
          console.log(response)
          this.afficherFormation();
        }
      )
    }

    ajouterFormation(){

      for(let c of this.ListeIdCours){

        let cour = new Cours();
        cour.id=c;
        this.FormationAAjouter.cours.push(cour);

        }

      this.fservice.ajouterFormation(this.FormationAAjouter).subscribe(
        response =>{

          console.log(response)
          this.afficherFormation();
          this.FormationAAjouter.cours=[];
          this.ListeIdCours = [];
        }
      )
    }

    modifierFormation(f:Formation){
      this.FormationAAjouter=f;
    }

    afficherCours(){
      this.cservice.getAll().subscribe(
        response =>{

          this.ListeCours = response;
          this.afficherFormation();

        }
      )
    }

    toggleSelection(id:number){

      if(this.ListeIdCours.includes(id)){
        this.ListeIdCours = this.ListeIdCours.filter(n=>n!=id);
      }else{
        this.ListeIdCours.push(id);
      }
      console.log(this.ListeIdCours)
    }



    EnleverCoursFormations(f:Formation){
      
      f.cours=[]
      this.fservice.ajouterFormation(f).subscribe(
        response=>{
          console.log(response);
          this.afficherFormation();
        }
      )
    }

  }



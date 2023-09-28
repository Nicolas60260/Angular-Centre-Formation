import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormateurService } from 'src/app/service/site/formateur.service';
import { ProspectService } from 'src/app/service/site/prospect.service';

@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css']
})
export class GestionFormateurComponent implements OnInit{
  formateur!:Formateur;
  listeFormateur!:Formateur[];
  user !: Utilisateur;

  constructor(private formateurService:FormateurService
    , private prospectService: ProspectService
    ,private titleService: Title
    ,private route: Router){}

  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : undefined;
    this.titleService.setTitle("Gestion des formateurs")
    this.afficherAll();
    this.formateur = new Formateur();
  }

  afficherAll(){
    this.formateurService.getAll().subscribe(
      response=>{this.listeFormateur = response},
      error=>{console.error("Impossible d'afficher la liste des formateurs");
      }
    )
  }
  
  enregistrerFormateur(){
    this.formateurService.addFormateur(this.formateur).subscribe(
      response=>{this.formateur,this.afficherAll(),this.formateur=new Formateur()},
      error=>{console.error("Impossible d'enregistrer le formateur");
      }
    )
  }

supprimerFormateur(id:number){
  this.formateurService.deleteFormateur(id).subscribe(
    response=>{console.log("formateur supprimé",this.afficherAll())},
    error=>{console.error("Impossible de supprimer le formateur");
    }
  )
  }

  modifierFormateur(formateur:Formateur){
    this.formateur=formateur;
    this.afficherAll();
  }

  afficherFormations(id:number){
    this.route.navigateByUrl(`adminFormation/${id}`)
  }

}

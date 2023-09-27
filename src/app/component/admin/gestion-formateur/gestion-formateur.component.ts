import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Formateur } from 'src/app/models/formateur';
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

  constructor(private formateurService:FormateurService, private prospectService: ProspectService,private titleService: Title){}

  ngOnInit(): void {
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

  // afficherFormation(id:number){
  //   this.route.navigateByUrl(`adminFormation/${id}`)
  // }

}

import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/service/site/cours.service';

@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrls: ['./gestion-cours.component.css']
})
export class GestionCoursComponent implements OnInit {
listeCours!:Cours[];
cours!:Cours;
selectedFile!: File;

constructor(private coursService:CoursService){}

  ngOnInit(): void {
  this.afficherAll();
  this.cours=new Cours();
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

  afficherAll(){
    this.coursService.getAll().subscribe(
      response=>{this.listeCours=response,
      this.listeCours.forEach(cours => {
        cours.urlfichier = "http://localhost:8018/dossiercours/" + cours.fichier
      })},
      error=>{console.error("Impossible d'afficher la liste des cours");
      }
    )
  }

  enregistrerCours(){
    let formdata = new FormData();
    if (this.selectedFile) {
      formdata.append("fichier",this.selectedFile)
    }
    if (this.cours.id) {
      formdata.append('id', this.cours.id.toString());
    }else{
      formdata.append('id', "0");

    }
    if(this.cours.duree) {
      formdata.append('duree', this.cours.duree.toString());
    }else{
      formdata.append('duree', "0");

    }
    formdata.append('nom', this.cours.nom);

    this.coursService.addCours(formdata).subscribe(
      response=>{console.log("Cours enregistré"), this.afficherAll(), this.cours= new Cours()},
      error=>{console.error("Impossible d'enregistrer le cours");
      }
    )
  }

  supprimerCours(id:number){
    this.coursService.deleteCours(id).subscribe(
      response=>{console.log("Cours supprimé"),this.afficherAll()},
      error=>{console.error("Impossible de supprimer le cours");
      }
    )
  }

  modifierCours(cours:Cours){
    this.cours=cours;
    this.afficherAll();
  }
}

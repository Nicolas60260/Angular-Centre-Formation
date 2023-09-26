import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/service/site/cours.service';

@Component({
  selector: 'app-page-cours',
  templateUrl: './page-cours.component.html',
  styleUrls: ['./page-cours.component.css']
})
export class PageCoursComponent implements OnInit{
  listeCours!:Cours[];
  constructor(private coursService:CoursService){}

ngOnInit(): void {
this.afficherAll()
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

}

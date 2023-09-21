import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/service/site/prospect.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.component.html',
  styleUrls: ['./gestion-prospect.component.css']
})
export class GestionProspectComponent implements OnInit {
  listeProspect !: Prospect[];
  prospect !: Prospect;

  constructor(private prospectService: ProspectService) { }

  ngOnInit(): void {
    this.afficherAll(),
      this.prospect=new Prospect()
  }

  afficherAll() {
    this.prospectService.getall().subscribe(
      response => { this.listeProspect = response },
      error => (console.error("Impossible d'afficher la liste des prospect"))
    )
  }
  supprimerProspect(id: number) {
    this.prospectService.deleteProspect(id).subscribe(
      response => { console.log("Prospect supprimé"), this.afficherAll() },
      error => console.error("Impossible de supprimer le prospect")
    )
  }

  enregistrerProspect(){
    this.prospectService.addProspect(this.prospect).subscribe(
      response=>{this.prospect=new Prospect(); this.afficherAll();
      console.log("Prospect enregistré")},
      error => {console.error("Impossible d'enregistrer le prospect")}
    )
  }

  modifierProsepct(prospect:Prospect){
    this.prospect=prospect;
    this.afficherAll()
  }
}

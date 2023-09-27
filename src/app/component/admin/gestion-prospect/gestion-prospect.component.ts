import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  csvfile!: File;
  fileContent: string | undefined;

  // constructor(private titleService: Title) {}

  constructor(private prospectService: ProspectService, private route: Router,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Gestion des prospects")
    this.afficherAll(),
    
      this.prospect = new Prospect()
  }

  onFileSelected(event: any) {
    this.csvfile = event.target.files[0];
  }


  validerCsv() {
    console.log(this.csvfile)
    if (this.csvfile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          this.fileContent = e.target.result as string;
          console.log("Contenu du fichier :", this.fileContent);
          const prospectsList = this.parseCSVContent(this.fileContent);
          console.log(prospectsList);
          prospectsList.forEach(prospect=>{
            this.prospectService.addProspect(prospect).subscribe(
              response => {
                this.prospect = new Prospect(); this.afficherAll();
                console.log("Prospect enregistré")
              },
              error => { console.error("Impossible d'enregistrer le prospect") }
            )
          })
        }
      };

      reader.readAsText(this.csvfile);
    }
  }

  parseCSVContent(content: string) {
    const lines = content.split('\n');
    const prospects = [];

    // Parcourez chaque ligne du fichier CSV
    for (let i = 1; i < lines.length; i++) { // Commencez à 1 pour ignorer l'en-tête
      const line = lines[i].trim();
      if (line) {
        const values = line.split(',');

        // Vérifiez que la ligne a le bon nombre de valeurs
        if (values.length === 5) {
          const [nom, prenom, mail, telephone, statut] = values;
          const prospect = new Prospect(undefined, nom, prenom, mail, telephone, statut);
          prospects.push(prospect);
        } else {
          console.warn(`La ligne ${i + 1} du fichier CSV n'a pas le bon nombre de valeurs.`);
        }
      }
    }

    return prospects;
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

  enregistrerProspect() {
    this.prospectService.addProspect(this.prospect).subscribe(
      response => {
        this.prospect = new Prospect(); this.afficherAll();
        console.log("Prospect enregistré")
      },
      error => { console.error("Impossible d'enregistrer le prospect") }
    )
  }

  modifierProsepct(prospect: Prospect) {
    this.prospect = prospect;
    this.afficherAll()
  }

  afficherCommentaire(id: number) {
    this.route.navigateByUrl(`adminCommentaire/${id}`)
  }
  afficherAppel(id: number) {
    this.route.navigateByUrl(`adminAppel/${id}`)
  }

  inscrireParticipant(prospect: Prospect) {
    console.log(prospect)
    this.prospectService.inscrireParticipant(prospect).subscribe(
      response => { console.log("Prospect #" + prospect.id + " inscrit") },
      error => {
        console.error("Impossible d'ajouter le prospect dans les inscrits");
      }
    );


  }
}


import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/service/site/paiement.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit{

  ListePaiements!:Paiement[]
  PaiementAAjouter!:Paiement;

  constructor(private pservice:PaiementService){}
  ngOnInit(): void {
    this.afficherPaiements();
    this.PaiementAAjouter=new Paiement();
  }

  afficherPaiements(){
    this.pservice.afficherPaiement().subscribe(
      response=>{
        this.ListePaiements=response;
      }
    )
  }

  ajouterPaiement(p:Paiement){
    this.pservice.ajouterPaiement(p).subscribe(
      response=>{
        console.log(response)
        this.afficherPaiements();
      }
    )
  }
}

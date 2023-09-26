import { Injectable } from '@angular/core';
import { Paiement } from 'src/app/models/paiement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participant } from 'src/app/models/participant';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }


  afficherPaiement(){
    return this.http.get<Paiement[]>("http://localhost:8018/paiement/a/list");
  }
  ajouterPaiement(p:Paiement){
    return this.http.post<Paiement>("http://localhost:8018/paiement/p/add",p);
  }

  supprimerPaiement(id:number){
    return this.http.delete<Paiement>(`http://localhost:8018/paiement/a/delete/${id}`);
  }
  afficherParticipantParPaiement(){
  return this.http.get<Participant[]>("http://localhost:8018/participant/cf/list");
}
}

import { Injectable } from '@angular/core';
import { Paiement } from 'src/app/models/paiement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }


  afficherPaiement(){
    return this.http.get<Paiement[]>("http://localhost:8018/paiement/a/list");
  }

  ajouterPaiement(p:Paiement){
    return this.http.post<Paiement>("http://localhost:8018/paiement/c/add",p);
  }
}

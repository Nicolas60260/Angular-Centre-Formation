import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participant } from 'src/app/models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient ) { }

  afficherParticipant(){

    return this.http.get<Participant[]>("http://localhost:8018/participant/pcf/list");
  }
  ajouterParticipant(p:Participant){

    return this.http.post<Participant>("http://localhost:8018/participant/cf/add",p);
  }

  supprimerParticipant(id:number){
    return this.http.delete<Participant>(`http://localhost:8018/participant/a/delete/${id}`);
  }

  ParticipantParId(id:number){
    return this.http.get<Participant>(`http://localhost:8018/participant/pcf/${id}`);
  }

  afficherParticipantParIdPaiement(idPaiement:number){
    return this.http.get<Participant>(`http://localhost:8018/participant/pcf/trouverParticipantsParIdPaiement/${idPaiement}`);
  }

  
}

import { Injectable } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) {}

  afficherLesFormations(){

    return this.http.get<Formation[]>("http://localhost:8018/formation/public/list");

  }

  supprimerLesFormations(id:number){
    return this.http.delete<Formation>(`http://localhost:8018/formation/a/delete/${id}`);
  }
  
  ajouterFormation(f:Formation){
    return this.http.post<Formation>(`http://localhost:8018/formation/f/add`,f);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from 'src/app/models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Formateur[]>("http://localhost:8018/formateur/public/list")
  }

  addFormateur(formateur:Formateur){
    return this.http.post("http://localhost:8018/formateur/f/add", formateur)
  }

  deleteFormateur(id:number){
    return this.http.delete(`http://localhost:8018/formateur/a/delete/${id}`)
  }

}

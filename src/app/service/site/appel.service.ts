import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(private http:HttpClient) {}

  getall(){
    return this.http.get<Appel[]>("http://localhost:8018/appel/c/list")
  }
  getById(id:number){
    return this.http.get<Appel>(`http://localhost:8018/appel/c/${id}`)
  }

  getCommentaireByAppelId(id:number){
    return this.http.get<Commentaire>(`http://localhost:8018/commentaire/c/appel/${id}`)
  }

  addAppel(appel:Appel){
    console.log(appel.commentaire.texte)
    return this.http.post("http://localhost:8018/appel/c/add",appel)
  }

  deleteAppel(id:number){
    return this.http.delete(`http://localhost:8018/appel/a/delete/${id}`)
  }
}

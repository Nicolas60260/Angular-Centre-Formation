import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Commentaire[]>("http://localhost:8018/commentaire/c/list")
  }

  getByProspectId(idprospect:number){
    return this.http.get<Commentaire[]>(`http://localhost:8018/commentaire/c/prospect/${idprospect}`)
  }

  deleteCommentaire(id:number){
    return this.http.delete(`http://localhost:8018/commentaire/a/delete/${id}`)
  }

  addCommentaire(commentaire:Commentaire){
    return this.http.post("http://localhost:8018/commentaire/c/add",commentaire)
  }

  getAppel(id:number){
    return this.http.get<Appel>(`http://localhost:8018/commentaire/c/appel/${id}`)
  }
}

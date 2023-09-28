import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appel } from 'src/app/models/appel';
import { Commentaire } from 'src/app/models/commentaire';
import { Commercial } from 'src/app/models/commercial';

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

  getByProspectId(idprospect:number){
    return this.http.get<Appel[]>(`http://localhost:8018/appel/c/prospect/${idprospect}`)
  }

  getByCommentaireNull(){
    return this.http.get<Appel[]>("http://localhost:8018/appel/c/comvide")
  }

  addAppel(appel:Appel){
    console.log(appel.rdv)
    return this.http.post("http://localhost:8018/appel/c/add",appel)
  }

  deleteAppel(id:number){
    return this.http.delete(`http://localhost:8018/appel/a/delete/${id}`)
  }

  getCommercial(id:number){
    return this.http.get<Commercial>(`http://localhost:8018/appel/c/commercial/${id}`)
  }

  getAppelByCommercial(id:number){
    return this.http.get<Appel[]>(`http://localhost:8018/appel/c/commercialappels/${id}`)
  }
}

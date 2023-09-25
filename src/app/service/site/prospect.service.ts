import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prospect } from 'src/app/models/prospect';


@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private http:HttpClient) {}

  getall(){
    return this.http.get<Prospect[]>("http://localhost:8018/prospect/c/list")
  }
  getById(id:number){
    return this.http.get<Prospect>(`http://localhost:8018/prospect/c/${id}`)
  }

  deleteProspect(id:number){
    return this.http.delete(`http://localhost:8018/prospect/c/delete/${id}`)
  }

  addProspect(prospect:Prospect){
    console.log(prospect)
    return this.http.post("http://localhost:8018/prospect/c/add",prospect)
  }

  inscrireParticipant(prospect:Prospect){ //  /c/inscrire
    
    console.log("Prospect #" + prospect.id + " inscrit")
    return this.http.post("http://localhost:8018/prospect/c/register",prospect)
  }
}

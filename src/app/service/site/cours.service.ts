import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from 'src/app/models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Cours[]>("http://localhost:8018/cours/p/list")
  }

  addCours(formdata:FormData){
    return this.http.post("http://localhost:8018/cours/f/add", formdata)
  }

  deleteCours(id:number){
    return this.http.delete(`http://localhost:8018/cours/a/delete/${id}`)
  }
}

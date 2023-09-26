import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cours } from 'src/app/models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }

  afficherLesCours(){

    return this.http.get<Cours[]>("http://localhost:8018/cours/p/list");

  }
}

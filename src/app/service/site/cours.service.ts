import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cours } from 'src/app/models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }

  getAll(){
    this.http.get<Cours[]>("http://localhost:8018/cours/p/list")
  }
}

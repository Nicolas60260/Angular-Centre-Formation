import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from 'src/app/models/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http:HttpClient) {}

  getall(){
    return this.http.get<Commercial[]>("http://localhost:8018/commercial/public/list")
  }
}

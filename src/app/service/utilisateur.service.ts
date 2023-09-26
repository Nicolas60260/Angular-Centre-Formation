import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  username!: string;
  password!: string;
 
  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;

  constructor(private http: HttpClient, private router: Router) { }




  getAllUtilisateurs() {



    return this.http.get<Utilisateur[]>("http://localhost:8018/utilisateur/a/list");

  }




  insererUtilisateur(utilisateur: Utilisateur) {

    return this.http.post(`http://localhost:8018/utilisateur/a/add`, utilisateur);

  }
  
  deleteUtilisateur(id:number){
                  
          return this.http.delete(`http://localhost:8018/utilisateur/a/delete/${id}`);
        }

          modifUtilisateur(utilisateur:Utilisateur){
  
          
  
            return this.http.post(`http://localhost:8018/utilisateur/pcf/modify`,utilisateur);
          }
  
  
          getById(id:number){
  
            
            return this.http.get<Utilisateur>(`http://localhost:8018/utilisateur/a/${id}`);
            
              }
}

import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationResponse } from 'src/app/models/authentification-response';


@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http:HttpClient) { }

  CatchToken(u:Utilisateur){

    return this.http.post<AuthentificationResponse>("http://localhost:8018/login",u);
  }
  getUser(username: string) {
    return this.http.get<Utilisateur>(`http://localhost:8018/utilisateur/public/${username}`)
  }

  GetUserByUsername(username:String){

    return this.http.get<Utilisateur>(`http://localhost:8018/utilisateur/public/userByUsername/${username}`);

  }
}

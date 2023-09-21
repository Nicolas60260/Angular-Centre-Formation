import { Component,OnInit } from '@angular/core';
import { AuthentificationResponse } from 'src/app/models/authentification-response';
import { Utilisateur } from 'src/app/models/utilisateur';


import { ConnexionService } from 'src/app/service/securite/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  EnregistrementUser!:Utilisateur;
  authResponse!:AuthentificationResponse;
  erreurConnection!:boolean;

  constructor(private cservice:ConnexionService) {
    
   }

  ngOnInit() : void{// méthode provenant de OnInit à redéfinir

    this.EnregistrementUser=new Utilisateur();
    
   }

   enregistrerUser(){
    
    this.cservice.CatchToken(this.EnregistrementUser).subscribe(
      response=>{

        this.erreurConnection=false;
        this.authResponse=response;
        console.log(this.authResponse)
        sessionStorage.setItem("token",this.authResponse.jwt);

        console.log(sessionStorage.getItem("token"))
        
        
      },
      error=>{
        
        this.erreurConnection=true;
      }
    )
    
  
  }



}



import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(private cservice:ConnexionService,private titleService: Title) {
    
   }

  ngOnInit() : void{// méthode provenant de OnInit à redéfinir
<<<<<<< HEAD
    this.titleService.setTitle("Page de connection")
=======
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
>>>>>>> master
    this.EnregistrementUser=new Utilisateur();
    
   }

   enregistrerUser(){
    
    this.cservice.CatchToken(this.EnregistrementUser).subscribe(
      response=>{

        this.erreurConnection=false;
        this.authResponse=response;
        
        sessionStorage.setItem("token",this.authResponse.jwt);
        sessionStorage.setItem("username",this.EnregistrementUser.username);
       

        console.log(sessionStorage.getItem("token"))
        
        
      },
      error=>{
        
        this.erreurConnection=true;
      }
    )
    
  
  }



}



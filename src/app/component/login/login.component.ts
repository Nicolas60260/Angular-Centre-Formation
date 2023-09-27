import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cservice:ConnexionService,private router:Router) {
    
   }

  ngOnInit() : void{// méthode provenant de OnInit à redéfinir
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    this.EnregistrementUser=new Utilisateur();
    
   }

   enregistrerUser(){
    
    this.cservice.CatchToken(this.EnregistrementUser).subscribe(
      response=>{

        this.erreurConnection=false;
        this.authResponse=response;
        
        sessionStorage.setItem("token",this.authResponse.jwt);


        this.cservice.GetUserByUsername(this.EnregistrementUser.username).subscribe(
          response2 =>{
            response2.password="you can not read the password";
            sessionStorage.setItem("user",JSON.stringify(response2));
            console.log(sessionStorage.getItem("user"))
            console.log(sessionStorage.getItem("token"))
            console.log("test a")
        this.router.navigateByUrl(`menuAdmin`);
          }
        )
        
       
        

        
        
        
      },
      error=>{
        
        this.erreurConnection=true;
      }
    )
    
  
  }



}



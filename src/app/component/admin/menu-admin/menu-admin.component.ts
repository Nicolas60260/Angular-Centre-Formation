import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit{
  user !:Utilisateur;

  constructor(private route: Router){}

ngOnInit(): void {
  let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : undefined;
 
}

deconnection(){
  window.sessionStorage.clear();
this.route.navigateByUrl("login")
  console.log("Déconnection réussie")
}


}

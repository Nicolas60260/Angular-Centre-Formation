import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user!:Utilisateur

  constructor(private route: Router){}


  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
    console.log(this.user)
  }
  deconnection(){
    window.sessionStorage.clear();
  this.route.navigateByUrl("login")
    console.log("Déconnection réussie")
  }
}

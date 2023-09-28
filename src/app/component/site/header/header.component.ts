import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user!:Utilisateur

  ngOnInit(): void {
    let sessionUser = sessionStorage.getItem("user");
    this.user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
    console.log(this.user)
  }
  
}

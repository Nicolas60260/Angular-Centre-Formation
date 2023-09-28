import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Utilisateur } from './models/utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  showNavbar: boolean = true;
  user!:Utilisateur
  bol:boolean=false
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  this.router.events.subscribe(event => {

    if (event instanceof NavigationEnd) {
      // Obtenez l'URL de la route actuelle
      const currentRoute = event.urlAfterRedirects;
      
      // Décidez si vous devez afficher ou masquer la barre de navigation en fonction de l'URL
      this.showNavbar = !currentRoute.includes('login'); // Par exemple, ne pas afficher sur la page de connexion
    }
  
  
  })
}




 

}

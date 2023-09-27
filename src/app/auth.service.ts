import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './models/role';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let valid: boolean = false;
    if (sessionStorage.getItem('username') != null) {
      valid=true;
      let sessionUser = sessionStorage.getItem("user");
      const user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateur();
      let role: Role = user.role;
      console.log(role)
      console.log(user);
      
      if (route.data['role'] && !route.data['role'].includes(role.nom)) { // Si on trouve le rôle associé au user dans le path alors le user peut y accéder
        valid = false;
      };
      return valid;
    } else {


      this.router.navigateByUrl('login');
      return false;
    }
  }
}

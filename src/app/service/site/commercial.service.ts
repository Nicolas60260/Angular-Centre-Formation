import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commercial } from 'src/app/models/commercial';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommercialService implements OnInit {


  Commercial!: Commercial;
  nom!: string;
  prenom!: string;
  mail!: string;
  telephone!: string;
  // A regler les listes et autres attributs propres aux commerciaux

 




  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit(): void {


  }


  getAllCommerciaux() {



    return this.http.get<Commercial[]>("http://localhost:8018/commercial/public/list");

  }




  insererCommercial(commercial: Commercial) {

    return this.http.post(`http://localhost:8018/commercial/a/add`, commercial);

  }
  
  deleteCommercial(id:number){
                  
          return this.http.delete(`http://localhost:8018/commercial/a/delete/${id}`);
        }

          modifCommercial(commercial:Commercial){
  
          
  
            return this.http.post(`http://localhost:8018/commercial/c/modify`,commercial);
          }
  
  
          getById(id:number){
  
            
            return this.http.get<Commercial>(`http://localhost:8018/commercial/public/${id}`);
            
              }
  
  

}

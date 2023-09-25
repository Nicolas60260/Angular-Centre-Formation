import { Formation } from "./formation";

export class Cours {
    id!:number;
nom!:string;
duree!:number;
fichier!:string;
formations!:Formation[];

constructor(id?:number
    ,nom?:string,
    duree?:number,
    fichier?:string,
    formations?:Formation[]){
        if (id) {
            this.id=id
        }
        if (nom) {
            this.nom=nom
        }
        if (duree) {
            this.duree=duree
        }
        if (fichier) {
            this.fichier=fichier
        }
        if (formations) {
            this.formations=formations
        }
    }

}

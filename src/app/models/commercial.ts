import { Appel } from "./appel";
import { Commentaire } from "./commentaire";

export class Commercial {
    id!:number;
    nom!:string;
    appels!:Appel[];
    commentaires!:Commentaire[];

    constructor(id?:number,
        nom?:string,
        appels?:Appel[],
        commentaires?:Commentaire[]){

            if (id) {
                this.id=id
            }
            if (nom) {
                this.nom=nom
            }
            if (appels) {
                this.appels=appels
            }
            if (commentaires) {
                this.commentaires=commentaires
            }
        }
}

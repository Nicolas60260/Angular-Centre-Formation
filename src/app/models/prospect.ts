
import { Appel } from "./appel";
import { Commentaire } from "./commentaire";
import { Personne } from "./personne";

export class Prospect extends Personne {
    statut!:string;
    appels!:Appel[];
    commentaires!:Commentaire[];

    constructor(id?:number,
        mail?:string,
        nom?:string,
        prenom?:string,
        telephone?:string,
        statut?:string,
        appels?:Appel[],
        commentaires?:Commentaire[]){
        super(id, mail, nom, prenom, telephone);
        if (statut) {
            this.statut=statut
        }
        if (appels) {
            this.appels=appels
        }
        if(commentaires){
            this.commentaires=commentaires
        }
    }


}

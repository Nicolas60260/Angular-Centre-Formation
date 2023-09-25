import { Appel } from "./appel";
import { Commercial } from "./commercial";
import { Prospect } from "./prospect";

export class Commentaire {
    id?:number;
    texte?:string;
    date?:Date;
    commercial?:Commercial;
    appel?:Appel ;
    prospect?:Prospect ;

    constructor(id?:number,
        texte?:string,
        date?:Date,
        commercial?:Commercial,
        appel?:Appel,
        prospect?:Prospect){
            if (id) {
                this.id=id
            }
            if (texte) {
                this.texte=texte
            }
            if (date) {
                this.date=date
            }
            if (commercial) {
                this.commercial=commercial
            }
            if (appel) {
                this.appel=appel
            }
            if (prospect) {
                this.prospect=prospect
            }
        }
}

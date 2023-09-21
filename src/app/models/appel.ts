import { Commercial } from "./commercial";
import { Prospect } from "./prospect";

export class Appel {


    id!:number;
    debutAppel!:Date;
    duree!:number;
    RDV!:boolean;
    commercial!:Commercial;
    appel!:Appel;
    prospect!:Prospect;
    constructor( 
        id?:number,
        duree?:number,
        debutAppel?:Date,
        RDV?:boolean,
        appel?:Appel,
        prospect?:Prospect
        ){
            if (id) {
                this.id=id
            }
            if (duree) {
                this.duree=duree
            }
            if (debutAppel) {
                this.debutAppel=debutAppel
            }
            if (RDV) {
                this.RDV=RDV
            }
            if (appel) {
                this.appel=appel
            }
            if (this.commercial) {
                this.commercial=this.commercial
            }
            if (prospect) {
                this.prospect=prospect
            }
    }
}

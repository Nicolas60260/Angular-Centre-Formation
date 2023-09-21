import { Commentaire } from "./commentaire";
import { Commercial } from "./commercial";
import { Prospect } from "./prospect";

export class Appel {
    id!: number;
    debutAppel!: Date;
    duree!: number;
    RDV!: boolean;
    commentaire!: Commentaire;
    commercial!: Commercial;
    prospect!: Prospect;

    constructor(id?: number,
        debutAppel?: Date,
        duree?: number,
        RDV?: boolean,
        commentaire?: Commentaire,
        commercial?: Commercial,
        prospect?: Prospect) {
        if (id) {
            this.id = id
        }
        if (debutAppel) {
            this.debutAppel = debutAppel
        }
        if (duree) {
            this.duree = duree
        }
        if (RDV) {
            this.RDV = RDV
        }
        if (commentaire) {
            this.commentaire = commentaire
        }
        if (commercial) {
            this.commercial = commercial
        }
        if (prospect) {
            this.prospect = prospect
        }

    }
}

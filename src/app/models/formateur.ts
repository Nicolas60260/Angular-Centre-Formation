import { Formation } from "./formation";
import { Utilisateur } from "./utilisateur";

export class Formateur extends Utilisateur{

    formations !: Formation[];

    constructor(

        id?: number,
        nom?: string,
        prenom?: string,
        mail?: string,
        telephone?: string,
        username?: string,
        password?: string,
        formations?:Formation[],

    ) {
        super(id, nom, prenom, mail, telephone,username,password);

        if (formations)
            this.formations = formations;


    }
}

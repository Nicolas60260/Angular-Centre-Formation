import { Appel } from "./appel";
import { Commentaire } from "./commentaire";
import { Utilisateur } from "./utilisateur";

export class Commercial extends Utilisateur{

// Attributs spécifiques à la classe Commercial 

    appels!:Appel[];
    commentaires!:Commentaire[];


    // Bloc d'attributs issus de Utilisateur et Personne
    override username!: string;
    override password!: string;
    override id!: number;
    override nom!: string;
    override prenom!: string;
    override mail!: string;
    override telephone!: string;

// Appeler le constructeur de la classe parente avec les attributs des classes fille et mères

    constructor(

        id?: number,
        nom?: string,
        prenom?: string,
        mail?: string,
        telephone?: string,
        username?: string,
        password?: string,
        appels?:Appel[],
        commentaires?:Commentaire[]
    ) {

        //Appel du constructeur magique de la classe mère.
        super(id, nom, prenom, mail, telephone, username,password);


        // Initialiser les attributs propores à la classe Commercial
        if (appels)
            this.appels = appels;
        if (commentaires)
            this.commentaires = commentaires;

    }
}


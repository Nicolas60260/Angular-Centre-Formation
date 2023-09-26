import { Personne } from "./personne";

export class Utilisateur extends Personne {


// Attributs spécifiques à la classe Utilisateur 
    username!: string;
    password!: string;

// Bloc d'attributs issus de Personne
    override   id!: number;
    override   nom!: string;
    override   prenom!: string;
    override   mail!: string;
    override telephone!: string;


// Appeler le constructeur de la classe parente avec les attributs des classes fille et mère

    constructor(

        id?: number,
        nom?: string,
        prenom?: string,
        mail?: string,
        telephone?: string,
        username?: string,
        password?: string,

    ) {
        super(id, nom, prenom, mail, telephone);

// Initialiser les attributs propores à la classe Utilisateurs

        if (username)
            this.username = username;
        if (password)
            this.password = password;

    }
}

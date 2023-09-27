import { Personne } from "./personne";
import { Role } from "./role";

export class Utilisateur extends Personne {


// Attributs spécifiques à la classe Utilisateur 
    username!: string;
    password!: string;
    role!:Role;




// Appeler le constructeur de la classe parente avec les attributs des classes fille et mère

    constructor(

        id?: number,
        nom?: string,
        prenom?: string,
        mail?: string,
        telephone?: string,
        username?: string,
        password?: string,
        role?:Role,

    ) {
        super(id, nom, prenom, mail, telephone);

// Initialiser les attributs propores à la classe Utilisateurs

        if (username)
            this.username = username;
        if (password)
            this.password = password;
        if (role)
            this.role = role;

    }
}

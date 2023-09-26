import { Personne } from "./personne";

export class Utilisateur extends Personne {

    username!: string;
    password!: string;



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

        if (username)
            this.username = username;
        if (password)
            this.password = password;

    }
}

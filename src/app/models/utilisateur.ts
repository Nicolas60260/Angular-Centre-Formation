


export class Utilisateur {
    
    id!:number;
    mail!:string;
    nom!:string;
    prenom!:string;
    telephone!:string;
    username!:string;
    password!:string;



    constructor(id?:number,mail?:string,nom?:string,prenom?:string,username?:string,password?:string,telephone?:string)
    {
        
        if(id)
        this.id = id;
        if(mail)
        this.mail = mail;
        if(nom)
        this.nom = nom;
        if(prenom)
        this.prenom = prenom;
        if(telephone)
        this.telephone = telephone;
        if(username)
        this.username = username;
        if(password)
        this.password = password;

    }
    
}

import { Paiement } from "./paiement";

export class Participant {
    id!:number;
    mail!:string;
    nom!:string;
    prenom!:string;
    telephone!:string;
    username!:string;
    password!:string;
    sommeDue!:number
    paiements!:Paiement[];




    constructor(id?:number,mail?:string,nom?:string,prenom?:string,username?:string,password?:string,telephone?:string,sommeDue?:number,paiements?:Paiement[])
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
        if(sommeDue)
        this.sommeDue = sommeDue;
        if(paiements)
        this.paiements = paiements;

    }
}

import { Cours } from "./cours";

export class Formation {
    id!:number;
    nom!:string;
    dateDebut!:Date;
    dateFin!:Date;
    prix!:number;
    username!:string;
    password!:string;
    cours!:Cours[];




    constructor(id?:number,nom?:string,dateDebut?:Date,dateFin?:Date,prix?:number,username?:string,password?:string,cours?:Cours[])
    {
        
        if(id)
        this.id = id;
        if(nom)
        this.nom = nom;
        if(dateDebut)
        this.dateDebut = dateDebut;
        if(dateFin)
        this.dateFin = dateFin;
        if(prix)
        this.prix = prix;
        if(username)
        this.username = username;
        if(password)
        this.password = password;
        if(cours)
        this.cours = cours;

    }

}



	


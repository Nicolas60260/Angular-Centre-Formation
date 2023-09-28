import { Cours } from "./cours";
import { Formateur } from "./formateur";

export class Formation {
    id!:number;
    nom!:string;
    dateDebut!:Date;
    dateFin!:Date;
    prix!:number;
    username!:string;
    password!:string;
    cours!:Cours[];
    formateur!: Formateur;




    constructor(id?:number,nom?:string,dateDebut?:Date,dateFin?:Date,prix?:number,username?:string,password?:string,cours?:Cours[],formateur?:Formateur)
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
        if(formateur)
        this.formateur = formateur;

    }

}



	


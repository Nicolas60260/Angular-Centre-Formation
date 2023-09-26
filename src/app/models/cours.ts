export class Cours {
    id!:number;
    duree!:number;
    nom!:String;
    fichier!:File;





    constructor(id?:number,duree?:number,nom?:String,fichier?:File)
    {
        
        if(id)
        this.id = id;
        if(duree)
        this.duree = duree;
        if(nom)
        this.nom = nom;
        if(fichier)
        this.fichier = fichier;
  
    }
}



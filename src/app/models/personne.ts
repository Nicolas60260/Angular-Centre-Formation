export class Personne {
    id!:number;
    mail!:string;
    nom!:string;
    prenom!:string;
    telephone!:string;

    constructor( id?:number,
        mail?:string,
        nom?:string,
        prenom?:string,
        telephone?:string){
            if (id) {
                this.id=id
            }
            if (mail) {
                this.mail=mail
            }
            if (nom) {
                this.nom=nom
            }
            if (prenom) {
                this.prenom=prenom
            }
            if (telephone) {
                this.telephone=telephone
            }
    }
}

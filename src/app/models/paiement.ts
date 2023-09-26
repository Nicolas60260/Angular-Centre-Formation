import { Participant } from "./participant";

export class Paiement {
    id!:number;
    date!:Date;
    mode!:String;
    montant!:number;
    participant!:Participant;



    constructor(id?:number,date?:Date,mode?:String,participant?:Participant,montant?:number)
    {
        
        if(id)
        this.id = id;
        if(date)
        this.date = date;
        if(mode)
        this.mode = mode;
        if(participant)
        this.participant = participant;
        if(montant)
        this.montant = montant;
       

    }
}

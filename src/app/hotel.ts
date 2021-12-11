import { Picture } from "./picture";

export class Hotel {
    constructor (
    public id?:string,
    public nom?: string,
    public prix?: number, 
    public image?: Picture[],
    public region?: string,
    public nbEtoiles?: string,
    public promotion?: boolean
    ){}
}

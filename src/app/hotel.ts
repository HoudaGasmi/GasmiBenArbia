import { Picture } from "./picture";

export class Hotel {
    static id: any;
    constructor (
    public id?:string,
    public nom?: string,
    public prix?: number, 
    public picture?: string,
    public image?: Picture[],
    public region?: string,
    public nbEtoiles?: string,
    public promotion?: boolean
    ){}
}

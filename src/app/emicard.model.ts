import {Register} from '../app/register.model';
export class Emicard{
    public cardNo: string;
    public issueDate:string;
    public expiryDate:string;
    public balance:number;
    public user:Register; 
}
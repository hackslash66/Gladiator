import { Product } from './product.model';
import { Register } from './register.model';

export class Order{
    //public pId:number;
    public user:Register;
    public product:Product;
    public productname:string;
    public producturl:string;
    public emiDuration: string;
    public orderDate:string;
    public amountPaid:number;
    public monthsLeft:number;
    public dueAmount:number;
}
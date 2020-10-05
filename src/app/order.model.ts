import { Product } from './product.model';
import { Register } from './register.model';

export class Order{
    //public pId:number;
    public orderID:any;
    public user:Register;
    public product:Product;
    public productname:string;
    public producturl:string;
    public emiDuration: number;
    public orderDate:string;
    public amountPaid:number;
    public monthsLeft:number;
    public recentdate:string;
    public dueAmount:number;
}
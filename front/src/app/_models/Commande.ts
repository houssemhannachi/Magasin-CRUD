import {CommandeLine} from "./CommandeLine";

export class Commande{
  idCommande?:number;
  orderLineList?:CommandeLine[];
  client?:string;
  invoiceDate?:string;
  invoiceNo?:string;
  totalAmount?:number;
}

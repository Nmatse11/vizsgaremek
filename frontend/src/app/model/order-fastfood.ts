import { OrderFastfoodItem } from "./order-fastfood-item";

export class OrderFastfood {
    [key: string]: any;
    id: number = 0;
    date: string = new Date().toLocaleDateString('hu');
    customerID: number = 0;
    order: OrderFastfoodItem[] =  [];
    amount: number = 0;
    shipping: string = 'free'
    status: string = 'new';
  }

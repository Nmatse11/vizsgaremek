import { OrderFastfoodItem } from "./order-fastfood-item";

export class OrderFastfood {
    [key: string]: any;
    id: number = 0;
    date: string = new Date().toLocaleDateString('hu');
    customerID: number = 1;
    order: OrderFastfoodItem[] =  [new OrderFastfoodItem()];
    amount: number = 1000;
    shipping: string = 'free'
    status: string = 'new';
  }

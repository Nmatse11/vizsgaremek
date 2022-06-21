import { OrderFastfoodItem } from "./order-fastfood-item";

export class OrderFastfood {
    [key: string]: any;
    _id: string = '';
    date: string = new Date().toLocaleDateString('hu');
    customerID: string = '';
    order: OrderFastfoodItem[] =  [new OrderFastfoodItem()];
    amount: number = 1000;
    shipping: string = 'free'
    status: string = 'new';
  }

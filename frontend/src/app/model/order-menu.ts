import { OrderMenuItem } from "./order-menu-item";

export class OrderMenu {
  [key: string]: any;
  id: number = 0;
  date: string = new Date().toLocaleDateString('hu');
  customerID: number = 0;
  order: OrderMenuItem[] =  [];
  amount: number = 0;
  shipping: string = 'free'
  status: string = 'new';
}

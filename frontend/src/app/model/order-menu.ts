import { OrderMenuItem } from "./order-menu-item";

export class OrderMenu {
  [key: string]: any;
  _id: string = '';
  date: string = new Date().toLocaleDateString('hu');
  customerID: string = '';
  order: OrderMenuItem[] = [new OrderMenuItem()];
  amount: number = 1000;
  shipping: string = 'free'
  status: string = 'new';
}

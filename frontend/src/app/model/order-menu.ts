import { OrderMenuItem } from "./order-menu-item";

export class OrderMenu {
  [key: string]: any;
  id: number = 0;
  date: string = new Date().toLocaleDateString('hu');
  customerID: number = 1;
  order: OrderMenuItem[] = [new OrderMenuItem()];
  amount: number = 1000;
  shipping: string = 'free'
  status: string = 'new';
}

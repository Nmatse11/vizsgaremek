export class Bill {
  [key: string]: any;
  id: number = 0;
  orderDate: string = new Date().toLocaleDateString('hu');
  billDate: string = new Date().toLocaleDateString('hu');
  orderID: number = 0;
  type: string = 'menu';
  amount: number = 0;
  status: string = 'new';
}

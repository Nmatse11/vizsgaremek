export class Bill {
  [key: string]: any;
  _id: string = '';
  orderDate: string = new Date().toLocaleDateString('hu');
  billDate: string = new Date().toLocaleDateString('hu');
  orderID: string = '';
  type: string = 'menu';
  amount: number = 1000;
  status: string = 'new';
}

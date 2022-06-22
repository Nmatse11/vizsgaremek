export class User {
  [key: string]: any;
  _id: string = '';
  email: string = '';
  password: string = '';
  role: string = 'customer'
  customerID?: string = '';
}

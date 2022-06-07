import { Address } from './address';

export class Customer {
  [key: string]: any;
  id: number = 0;
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phonenumber: string = '';
  address: Address = new Address();
  shipAddress: Address = new Address();
  active: boolean = true;
}

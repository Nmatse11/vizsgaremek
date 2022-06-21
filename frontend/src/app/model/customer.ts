import { Address } from './address';

export class Customer {
  [key: string]: any;
  _id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phonenumber: string = '';
  address: Address[] = [new Address()];
  shipAddress: Address[] = [new Address()];
  active: boolean = true;
}

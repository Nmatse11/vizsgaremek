import { Allergen } from "./allergen";

export class Fastfood {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  menu: string = 'pizza';
  allergens: Allergen[] = [new Allergen()]
  category: string = 'PIZ';
  descripiton?: string = '';
  active: boolean = true;
  numberOfOrder?: number = 0;
  numberOfOrderFamily?: number = 0;
  numberOfPaidOrder?: number = 0
  numberOfPaidOrderFamily?: number = 0;
}

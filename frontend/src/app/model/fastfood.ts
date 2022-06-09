export class Fastfood {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  menu: string = '';
  allergens: string[] = []
  category: string = '';
  descripiton?: string = '';
  active: boolean = true;
  numberOfOrder?: number = 0;
  numberOfOrderFamily?: number = 0;
  numberOfPaidOrder?: number = 0
  numberOfPaidOrderFamily?: number = 0;
}

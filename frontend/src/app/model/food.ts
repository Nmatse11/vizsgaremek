export class Food {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  menu: string = '';
  img: string = '';
  allergens: string[] = []
  category: string = '';
  vegan: boolean = false;
  fitness?: boolean = false;
  active: boolean = true;
}

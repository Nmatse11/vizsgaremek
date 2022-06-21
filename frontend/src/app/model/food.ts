import { Allergen } from "./allergen";

export class Food {
  [key: string]: any;
  _id: string = '';
  name: string = '';
  menu: string = 'breakfast';
  img: string = '';
  allergens: Allergen[] = [new Allergen()]
  category: string = 'R1';
  vegan: boolean = false;
  fitness: boolean = false;
  active: boolean = true;
  numberInMenu?: number = 0
  weekOfYear?: number[] = []
}

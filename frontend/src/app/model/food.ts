import { Allergen } from "./allergen";

export class Food {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  menu: string = 'breakfast';
  img: string = '';
  allergens: Allergen[] = [new Allergen()]
  category: string = 'R1';
  vegan: boolean = false;
  fitness: boolean = false;
  active: boolean = true;
}

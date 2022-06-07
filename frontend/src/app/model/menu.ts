import { Food } from "./food";

export class Menu {
    [key: string]: any;
    id: number = 0;
    name: string = '';
    week: number = 0;
    date: Date = new Date();
    category: string = '';
    food: Food = new Food;
}

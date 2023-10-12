import { Ingredient } from '../shared/ingredient-model';

export class Recipe {
  public id: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public ingredients: Ingredient[];

  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}

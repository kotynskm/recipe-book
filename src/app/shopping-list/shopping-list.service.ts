import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // manage list of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient(5, 'apples'),
    new Ingredient(10, 'tomatoes'),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

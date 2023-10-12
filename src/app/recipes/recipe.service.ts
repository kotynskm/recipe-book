import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Spaghetti',
      'Classic pasta dish with tomato sauce',
      'https://www.foodandwine.com/thmb/uyqKyW7A-IpMNjHqTkV5n4MOyis=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201304-xl-sauce-simmered-spaghetti-al-pomodoro-2000-b60bbe3cc6ad4b029fcc75844c33b9dd.jpg',
      [
        new Ingredient(10, 'tomatoes'),
        new Ingredient(1, 'spaghetti noodles'),
        new Ingredient(1, 'basil'),
        new Ingredient(1, 'parmesan cheese'),
      ]
    ),
  ];

  // get access to recipes from outside
  getRecipes() {
    // return it as a slice, so that it returns a new array that is a copy (so we won't modify the original in the service)
    return this.recipes.slice();
  }
}

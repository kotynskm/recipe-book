import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private shoppinglistservice: ShoppingListService) {}
  recipesChanged = new Subject<Recipe[]>();

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
    new Recipe(
      2,
      'Mashed Potatoes',
      'Buttery and creamy, just like grandma used to make',
      'https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg',
      [
        new Ingredient(5, 'potatoes'),
        new Ingredient(1, 'butter'),
        new Ingredient(1, 'heavy cream'),
      ]
    ),
  ];

  getRecipe(id: number) {
    return this.recipes.find((el) => el.id === id);
  }

  // get access to recipes from outside
  getRecipes() {
    // return it as a slice, so that it returns a new array that is a copy (so we won't modify the original in the service)
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const recipeToUpdate = this.recipes.find((el) => el.id === id);

    recipeToUpdate.title = newRecipe.title;
    recipeToUpdate.description = newRecipe.description;
    recipeToUpdate.imageUrl = newRecipe.imageUrl;
    recipeToUpdate.ingredients = newRecipe.ingredients;

    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistservice.addIngredients(ingredients);
  }
}

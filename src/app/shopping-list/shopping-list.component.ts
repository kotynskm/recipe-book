import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient(5, 'apples'),
    new Ingredient(10, 'tomatoes'),
  ];

  // get event from child component
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

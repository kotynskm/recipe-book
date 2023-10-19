import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  isEditing: boolean = false;
  ingredientIndex: number;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
  }

  onSelectedIng(name: string, amount: number, index: number) {
    this.selectedIngredient = new Ingredient(amount, name);
    this.isEditing = true;
    this.ingredientIndex = index;
  }

  resetEditing() {
    this.isEditing = false;
  }
}

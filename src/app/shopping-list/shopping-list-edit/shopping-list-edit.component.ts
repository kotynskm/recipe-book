import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(
    private formBuilder: FormBuilder,
    private shoppinglistService: ShoppingListService
  ) {}

  ingredientForm = this.formBuilder.group({
    name: '',
    amount: 0,
  });

  // emit the event to add ingredient to ingredients list
  onSubmit(): void {
    const addedIngredient = new Ingredient(
      this.ingredientForm.value.amount,
      this.ingredientForm.value.name
    );
    this.shoppinglistService.addIngredient(addedIngredient);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private formBuilder: FormBuilder) {}
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

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
    this.ingredientAdded.emit(addedIngredient);
  }
}

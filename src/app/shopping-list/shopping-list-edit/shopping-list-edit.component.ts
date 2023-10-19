import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnChanges {
  constructor(
    private formBuilder: FormBuilder,
    private shoppinglistService: ShoppingListService
  ) {
    this.ingredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      amount: [1, [Validators.required, this.checkIngAmountIsNotZero]],
    });
  }
  ingredientForm: FormGroup;
  @Input() selectedIngredient: Ingredient;
  @Input() isEditing: boolean;
  @Input() ingredientIndex: number;
  @Output() finishedEditing = new EventEmitter<boolean>();

  ngOnChanges() {
    if (this.ingredientForm !== null && this.isEditing) {
      this.ingredientForm.setValue({
        name: this.selectedIngredient.name,
        amount: this.selectedIngredient.amount,
      });
    }
  }

  onSubmit(): void {
    const addedIngredient = new Ingredient(
      this.ingredientForm.value.amount,
      this.ingredientForm.value.name
    );
    if (this.isEditing) {
      this.shoppinglistService.updateIngredient(
        this.ingredientIndex,
        addedIngredient
      );
    } else {
      this.shoppinglistService.addIngredient(addedIngredient);
    }
    this.finishedEditing.emit();
    this.ingredientForm.reset();
  }

  checkIngAmountIsNotZero(control: FormControl): { [key: string]: boolean } {
    if (control.value <= 0) {
      return { lessThanZero: true };
    }
    return null;
  }
}

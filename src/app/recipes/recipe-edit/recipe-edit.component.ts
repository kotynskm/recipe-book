import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  id: number;
  editMode: boolean = false;

  recipeEditForm = this.formBuilder.group({
    title: '',
    description: '',
    imageUrl: '',
    ingredients: [{ name: '', amount: 0 }],
  });

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
  }

  recipeFormSubmit() {
    console.log(this.recipeEditForm.value);
  }
}

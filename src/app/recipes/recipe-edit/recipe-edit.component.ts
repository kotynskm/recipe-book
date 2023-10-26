import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  recipeEditForm: FormGroup;
  id: number;
  editMode: boolean = false;
  controlOptions: AbstractControlOptions = { validators: Validators.required };

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  // initialize form with values if we are in edit mode, or blank if not
  private initForm() {
    let title = '';
    let imageUrl = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      title = recipe.title;
      imageUrl = recipe.imageUrl;
      description = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeEditForm = this.formBuilder.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
      imageUrl: [imageUrl, Validators.required],
      ingredients: ingredients,
    });
  }

  recipeFormSubmit() {
    // --- we could assign all the values from the form, but we can also just pass recipeEditForm.value
    const newRecipe = new Recipe(
      Math.floor(Math.random() * 100),
      this.recipeEditForm.value.title,
      this.recipeEditForm.value.description,
      this.recipeEditForm.value.imageUrl,
      this.recipeEditForm.value.ingredients
    );
    // push recipe to recipe list
    // update existing recipe
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeEditForm.value);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.recipeEditForm.reset();
  }

  getControls() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
}

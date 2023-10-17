import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
  controlOptions: AbstractControlOptions = { validators: Validators.required };

  recipeEditForm = this.formBuilder.group({
    title: '',
    description: '',
    imageUrl: '',
    ingredients: [{ name: '', amount: 0 }],
    requiredControl: ['', this.controlOptions],
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

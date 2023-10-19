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

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  recipeEditForm: FormGroup;
  id: number;
  editMode: boolean = false;
  controlOptions: AbstractControlOptions = { validators: Validators.required };

  // recipeEditForm = this.formBuilder.group({
  //   title: '',
  //   description: '',
  //   imageUrl: '',
  //   ingredients: this.formBuilder.array([]),
  //   requiredControl: ['', this.controlOptions],
  // });

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    this.recipeEditForm = this.formBuilder.group({
      title: '',
      description: '',
      imageUrl: '',
      ingredients: this.formBuilder.array([]),
      requiredControl: ['', this.controlOptions],
    });
  }

  recipeFormSubmit() {
    console.log(this.recipeEditForm.value);
    this.recipeEditForm.reset();
  }

  getControls() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    const control = new FormControl(null);
    (<FormArray>this.recipeEditForm.get('ingredients')).push(control);
  }
}

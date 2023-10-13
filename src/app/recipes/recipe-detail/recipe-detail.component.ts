import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Output() sendIngredients = new EventEmitter<Ingredient[]>();

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  id: number;
  recipe: Recipe;

  ngOnInit() {
    // subscribe to params to react to dynamic changes in the url
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  sendIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

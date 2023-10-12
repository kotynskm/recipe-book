import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  recipeID: string;
  recipe: Recipe;

  ngOnInit() {
    this.recipeID = this.route.snapshot.paramMap.get('recipeID');
    this.recipe = this.recipeService
      .getRecipes()
      .find((element) => element.id.toString() === this.recipeID);
  }

  sendIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

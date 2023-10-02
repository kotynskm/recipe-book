import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  constructor(private route: ActivatedRoute) {}
  recipeID: string;
  recipe: Recipe;

  recipes: Recipe[] = [
    new Recipe(
      1,
      'Spaghetti',
      'Classic pasta dish with tomato sauce',
      'https://www.foodandwine.com/thmb/uyqKyW7A-IpMNjHqTkV5n4MOyis=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201304-xl-sauce-simmered-spaghetti-al-pomodoro-2000-b60bbe3cc6ad4b029fcc75844c33b9dd.jpg'
    ),
  ];

  ngOnInit() {
    this.recipeID = this.route.snapshot.paramMap.get('recipeID');
    this.recipe = this.recipes.find(
      (element) => element.id.toString() === this.recipeID
    );
  }
}

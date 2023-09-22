import { Component, Output } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      1,
      'Spaghetti',
      'Classic pasta dish with tomato sauce',
      'https://www.foodandwine.com/thmb/uyqKyW7A-IpMNjHqTkV5n4MOyis=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201304-xl-sauce-simmered-spaghetti-al-pomodoro-2000-b60bbe3cc6ad4b029fcc75844c33b9dd.jpg'
    ),
  ];
}

import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://omnivorescookbook.com/wp-content/uploads/2022/02/220201_Beef-and-Chinese-Broccoli_3.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://omnivorescookbook.com/wp-content/uploads/2022/02/220201_Beef-and-Chinese-Broccoli_3.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  private recipes: Recipe[] =
    [
      new Recipe(
        'A Test Recipe',
        'This is a simply test',
        'https://i1.pickpik.com/photos/1022/304/27/recipe-cooking-beef-meat-preview.jpg',
        [
          new Ingredient('Meat', 20),
          new Ingredient('Pasta', 5)
        ],
      ),
      new Recipe(
        'A Test Recipe',
        'This is a simply test',
        'https://i1.pickpik.com/photos/1022/304/27/recipe-cooking-beef-meat-preview.jpg',
        [
          new Ingredient('Chicken', 10),
          new Ingredient('Rice', 6)
        ],
      ),
    ];
  RecipeSelected = new EventEmitter<Recipe>();

  constructor(private sLService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.sLService.addIngradients(ingredients);
  }
}

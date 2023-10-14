import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] =
    [
      new Ingredient('Apples', 6),
      new Ingredient('Tomatos', 10),
    ];

  getAllIngredients() {
    return this.ingredients.slice();
  }
  addIngradient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingradientsChanged.emit(this.ingredients.slice());
  }
  addIngradients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingradientsChanged.emit(this.ingredients.slice());
  }
}

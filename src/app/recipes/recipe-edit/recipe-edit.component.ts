import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  recipeForm!: FormGroup;
  id: number | undefined;
  editMode = false;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.editMode = this.id != null;
      this.initForm();
    });
  }
  private initForm() {
    debugger
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id!);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
    });
  }
  onSubmit() {

  }
}

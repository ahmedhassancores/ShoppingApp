import { Component, ElementRef, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") nameInput: ElementRef | undefined;
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef | undefined;

  constructor(private sLService: ShoppingListService) {

  }
  onAddItem() {
    this.sLService.addIngradient(new Ingredient(this.nameInput?.nativeElement.value,
      this.amountInput?.nativeElement.value))
  }
}

import {Component, Input} from '@angular/core';

@Component({
selector: 'edit-recipe',
    template: `
    <span><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Edit</button></span>
    <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <h3>Ingredients</h3>
          <!--<pre>{{ingredients}}</pre>-->
          <div *ngFor="let ing of ingredients">
          <input [(ngModel)]="ing.name"/>
          <button (click)="removeIngredient(ing)">Remove Ingredient</button>
          </div>
          <button (click)="addIngredient()">Add Ingredient</button>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Save</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
    `

})

export class EditRecipe {

    @Input() ingredients;

    addIngredient(){
        this.ingredients.push({name: ''});
    }

    removeIngredient(ing){
        this.ingredients.splice((this.findByName(ing.name)),1);
    }

    findByName(name){
        for(var i=0; i<this.ingredients.length; i++){
            if(this.ingredients[i].name === name){
                return i;
            }
        }
    }

}
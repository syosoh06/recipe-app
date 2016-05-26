import {Component, Input} from '@angular/core';
import {Recipe} from './recipe';
@Component({
selector: 'delete-recipe',
    template: `
    <span><button (click)="deleteRecipe()">Delete</button></span>
    `
})

export class DeleteRecipe {

    @Input() id: number;
    @Input() recipes: Recipe[];
    recipeArrayIndexToBeDeleted: number = 0;

    deleteRecipe(){
        this.recipeArrayIndexToBeDeleted=this.findById();
        (this.recipes).splice(this.recipeArrayIndexToBeDeleted,1);
        console.log(this.recipes);
    }

    findById(){
        for(var i=0; i<this.recipes.length; i++){
            if(this.recipes[i].id === this.id){
                return i;
            }
        }
    }

}
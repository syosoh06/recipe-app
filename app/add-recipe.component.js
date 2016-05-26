"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AddRecipe = (function () {
    function AddRecipe() {
        this.recipe = { name: '' };
        this.ingredients = [{ name: '' }];
    }
    AddRecipe.prototype.addIngredient = function () {
        this.ingredients.push({ name: '' });
    };
    AddRecipe.prototype.addRecipe = function () {
        this.recipe.id = this.recipes.length + 1;
        this.recipe.ingredients = this.ingredients;
        this.recipes.push(this.recipe);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddRecipe.prototype, "recipes", void 0);
    AddRecipe = __decorate([
        core_1.Component({
            selector: 'add-recipe',
            template: "\n    <button class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#addRecipeModal\">Add Recipe</button>\n\n    <div class=\"modal fade\" id=\"addRecipeModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title\">Modal Header</h3>\n        </div>\n        <div class=\"modal-body\">\n        <h4>Recipe Name</h4>\n        <input [(ngModel)] = \"recipe.name\"/>\n        <h4>Ingredients</h4>\n        <div *ngFor = \"let ing of ingredients\">\n        <input [(ngModel)]=\"ing.name\"/>\n        </div>\n        <button (click) = \"addIngredient()\">Add Ingredient</button>\n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"addRecipe()\">Save</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AddRecipe);
    return AddRecipe;
}());
exports.AddRecipe = AddRecipe;
//# sourceMappingURL=add-recipe.component.js.map
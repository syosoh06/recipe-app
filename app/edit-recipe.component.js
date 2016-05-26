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
var EditRecipe = (function () {
    function EditRecipe() {
    }
    EditRecipe.prototype.addIngredient = function () {
        this.ingredients.push({ name: '' });
    };
    EditRecipe.prototype.removeIngredient = function (ing) {
        this.ingredients.splice((this.findByName(ing.name)), 1);
    };
    EditRecipe.prototype.findByName = function (name) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === name) {
                return i;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditRecipe.prototype, "ingredients", void 0);
    EditRecipe = __decorate([
        core_1.Component({
            selector: 'edit-recipe',
            template: "\n    <span><button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Edit</button></span>\n    <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Modal Header</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h3>Ingredients</h3>\n          <!--<pre>{{ingredients}}</pre>-->\n          <div *ngFor=\"let ing of ingredients\">\n          <input [(ngModel)]=\"ing.name\"/>\n          <button (click)=\"removeIngredient(ing)\">Remove Ingredient</button>\n          </div>\n          <button (click)=\"addIngredient()\">Add Ingredient</button>\n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Save</button>\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EditRecipe);
    return EditRecipe;
}());
exports.EditRecipe = EditRecipe;
//# sourceMappingURL=edit-recipe.component.js.map
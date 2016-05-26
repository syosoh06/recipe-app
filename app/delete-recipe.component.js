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
var DeleteRecipe = (function () {
    function DeleteRecipe() {
        this.recipeArrayIndexToBeDeleted = 0;
    }
    DeleteRecipe.prototype.deleteRecipe = function () {
        this.recipeArrayIndexToBeDeleted = this.findById();
        (this.recipes).splice(this.recipeArrayIndexToBeDeleted, 1);
        console.log(this.recipes);
    };
    DeleteRecipe.prototype.findById = function () {
        for (var i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].id === this.id) {
                return i;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DeleteRecipe.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DeleteRecipe.prototype, "recipes", void 0);
    DeleteRecipe = __decorate([
        core_1.Component({
            selector: 'delete-recipe',
            template: "\n    <span><button (click)=\"deleteRecipe()\">Delete</button></span>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DeleteRecipe);
    return DeleteRecipe;
}());
exports.DeleteRecipe = DeleteRecipe;
//# sourceMappingURL=delete-recipe.component.js.map
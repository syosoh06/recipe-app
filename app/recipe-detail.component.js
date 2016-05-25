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
var ingredients_service_1 = require("./ingredients.service");
//import {Ingredient} from "./ingredient";
var RecipeDetail = (function () {
    function RecipeDetail(ingService) {
        this.ingService = ingService;
    }
    RecipeDetail = __decorate([
        core_1.Component({
            selector: 'recipe-detail',
            template: "\n    <div>\n    <h3>Ingredients</h3>\n    <div *ngFor=\"let ing in ingredients\">\n    <p>{{ing}}</p>\n    </div>\n    <div>\n    <span><button>Delete</button></span>\n    <span><button>Edit</button></span>\n    </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [ingredients_service_1.IngredientService])
    ], RecipeDetail);
    return RecipeDetail;
}());
exports.RecipeDetail = RecipeDetail;
//# sourceMappingURL=recipe-detail.component.js.map
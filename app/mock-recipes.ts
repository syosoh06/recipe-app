import { Recipe } from './recipe';
import {Ingredient} from './ingredient';

export var RECIPES: Recipe[] = [
    {id: 1, name: 'Pumpkin Pie', ingredients: [{name: 'pumpkin'}, {name:'pie'}]},
    {id: 2, name: 'Spaghetti', ingredients: [{name:'spaghetti'}, {name:'meatballs'}]},
    {id: 3, name: 'Onion Pie', ingredients: [{name:'onion'}, {name:'pie'}]},
    {id: 4, name: 'Chicken Tikka Masala', ingredients: [{name:'chicken'}, {name:'tikka'}, {name: 'masala'}]},
    {id: 5, name: 'Paneer Tikka Masala', ingredients: [{name:'paneer'}, {name:'tikka'}, {name: 'masala'}]}
];
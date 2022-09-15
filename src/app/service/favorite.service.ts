import { Injectable } from '@angular/core';
import { Result } from '../interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  favorites:Result[] =[];

  addRecipeToFavoritelist(recipe:Result):void{
    this.favorites.push(recipe);
  }

  getFavorites():Result[]{
    return this.favorites;
  }

  removeRecipe(id:number){
    this.favorites.splice(id, 1);
  }
}

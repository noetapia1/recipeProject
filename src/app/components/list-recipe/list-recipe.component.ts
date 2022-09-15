import { Component, OnInit, Input, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/results';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {


  @Input() recipeList:Result[]=[];
  @Input() favoriteView:boolean = false;
  constructor(private service:FavoriteService) { }

  ngOnInit(): void {
  }

  addRecipeToFavorites(recipe:Result){
    this.service.addRecipeToFavoritelist(recipe);
  }

  removeRecipeFromFavorites(id:number){
    this.service.removeRecipe(id);
  }

}

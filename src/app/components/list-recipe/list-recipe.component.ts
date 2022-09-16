import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Result } from 'src/app/interfaces/results';
import { FavoriteService } from 'src/app/service/favorite.service';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {


  @Input() recipeList:Result[]=[];
  @Input() favoriteView:boolean = false;
  @Output() removeTask: EventEmitter<void> = new EventEmitter<void>();
  constructor(private service:FavoriteService, private recipeService:RecipeService) { }

  ngOnInit(): void {
  }


  

  addRecipeToFavorites(recipe:Result){
    this.service.addRecipeToFavoritelist(recipe).subscribe(rece =>{});
  }

  removeRecipeFromFavorites(recipe:Result){
    this.service.removeRecipe(recipe._id).subscribe();
    this.removeTask.emit();
  }

}

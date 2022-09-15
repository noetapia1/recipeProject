import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe | undefined;

  constructor(private service:RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
        this.getRecipeDetail(String(params.get("id")));
      }
    );
  }

  getRecipeDetail(id:string){
    this.service.getRecipeDetail(id).subscribe(
      (data)=>this.recipe = data
    );
  }

  getIngredientImageUrl(url:string){
    return "https://spoonacular.com/cdn/ingredients_100x100/" + url;
  }

}

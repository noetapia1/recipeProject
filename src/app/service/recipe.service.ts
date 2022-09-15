import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { environment } from 'src/environments/environment';
import { RecipeResults, Result } from '../interfaces/results';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient:HttpClient) { }

  getRecipeDetail(id:string):Observable<Recipe>{
    return this.httpClient.get<Recipe>(environment.recipeDetailSearch(id));
  }

  getRandomRecipe():Observable<Recipe>{
    return this.httpClient.get<Recipe>(environment.randomRecipeSearch);
  }

  getFilteredRecipes(freeText:string, cuisine:string, type:string):Observable<Result[]>{
    var searchRecipeUrl:string = environment.recipeSearch;
    var parameterAdded:boolean = false;
    console.log("freetext {}, cuisine{}, type{}", freeText, cuisine, type);
    if(freeText!="" || cuisine != "" || type != ""){
      searchRecipeUrl = searchRecipeUrl + "?"
      if(freeText!=""){
        searchRecipeUrl = searchRecipeUrl + "query=" + freeText;
        parameterAdded = true;
      }
      if(cuisine!=""){
        if(parameterAdded){
          searchRecipeUrl = searchRecipeUrl + "&"
        }
        searchRecipeUrl = searchRecipeUrl +"cuisine=" + cuisine;
        parameterAdded = true;
      }
      if(type!=""){
        if(parameterAdded){
          searchRecipeUrl = searchRecipeUrl + "&"
        }
        searchRecipeUrl = searchRecipeUrl + "type=" + type;
      }
    }
    console.log("search recipe url: ", searchRecipeUrl);
    return this.httpClient.get<RecipeResults>(searchRecipeUrl).pipe(map((data)=>data.results));
  }
}

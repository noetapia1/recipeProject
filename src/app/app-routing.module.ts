import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterRecipeComponent } from './components/filter-recipe/filter-recipe.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  
  {path: 'recipeList', component: ListRecipeComponent},
  {path: 'recipeDetail/:id', component: RecipeDetailComponent},
  {path: 'filterRecipe', component:FilterRecipeComponent},
  {path: 'favoriteList', component:FavoritesComponent},
  {path: '', redirectTo: '/filterRecipe', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterRecipeComponent } from './components/filter-recipe/filter-recipe.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/filterRecipe', pathMatch:'full'},
  {path: 'recipeList', component: ListRecipeComponent},
  {path: 'recipeDetail/:id', component: RecipeDetailComponent},
  {path: 'filterRecipe', component:FilterRecipeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

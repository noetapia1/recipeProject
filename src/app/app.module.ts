import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { FilterRecipeComponent } from './components/filter-recipe/filter-recipe.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    FilterRecipeComponent,
    ListRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

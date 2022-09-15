import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { FilterRecipeComponent } from './components/filter-recipe/filter-recipe.component';
import { ListRecipeComponent } from './components/list-recipe/list-recipe.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    FilterRecipeComponent,
    ListRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

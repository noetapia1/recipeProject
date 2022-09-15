import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/results';
import { RecipeService } from 'src/app/service/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-recipe',
  templateUrl: './filter-recipe.component.html',
  styleUrls: ['./filter-recipe.component.css']
})
export class FilterRecipeComponent implements OnInit {

  recipeResults:Result[] = [];
  constructor(private service:RecipeService, private route:ActivatedRoute, private router:Router) { }

  query:string = "";
  cuisine:string = "";
  dishType:string = "";



  ngOnInit(): void {
  }

  getRecipeList(form: NgForm){
    this.service.getFilteredRecipes(this.query, this.cuisine, this.dishType).subscribe((data)=>{
      this.recipeResults = data;
    });
    console.log("query {}, cuisine{}, type{}", this.query, this.cuisine, this.dishType);
    form.resetForm();
    this.query="";
    this.cuisine="";
    this.dishType="";
  }


}

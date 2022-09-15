import { Component, OnInit, Input, Output } from '@angular/core';
import { Result } from 'src/app/interfaces/results';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {


  @Input() recipeList:Result[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

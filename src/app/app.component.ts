import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeProject';

  constructor(private router:Router) {
    
  }
  navigateToSearch(){
    this.router.navigate(['filterRecipe']);
  }

  navigateToFavorites(){
    this.router.navigate(['favoriteList']);
  }
}

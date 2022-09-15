import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/results';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  favoriteView:boolean = true;
  recipeResults:Result[] = [];
  constructor(private service:FavoriteService) { }

  ngOnInit(): void {
    this.recipeResults = this.service.getFavorites();
  }

}

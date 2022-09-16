import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Result } from '../interfaces/results';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpClient:HttpClient) { }

  favorites:Result[] =[];

  addRecipeToFavoritelist(recipe:Result):Observable<Result> {
    return this.httpClient.post<Result>(environment.dbUrl, recipe, {
      headers: { "x-apikey": environment.dbKey }
    });
  }

  getFavorites():Observable<Result[]>{
    return this.httpClient.get<Result[]>(environment.dbUrl, {
      headers: { "x-apikey": environment.dbKey }
    });
  }

  removeRecipe(id:number):Observable<void>{
    if (!id) {
      return of();
    }
    return this.httpClient.delete<void>(`${environment.dbUrl}/${id}`, {
      headers: { "x-apikey": environment.dbKey }
    });
  }
}

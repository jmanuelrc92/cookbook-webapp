import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipeList(): Observable<any> {
    return this.http.get("");
  }

  getRecipe(id: string):Observable<any> {
    return this.http.get("");
  }
}

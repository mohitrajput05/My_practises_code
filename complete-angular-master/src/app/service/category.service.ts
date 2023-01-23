import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryApi = "http://localhost:3000/category/category-list";
  constructor(private _http:HttpClient) {

  }
  public getCategortList():Observable<Category[]>{
    return this._http.get<Category[]>(this.categoryApi);
  }
}

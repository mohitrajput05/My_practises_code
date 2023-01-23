import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productListApi = "http://localhost:3000/product/product-list";
  private productOfCategpryApi = "http://localhost:3000/product/category-product";
  private searchProductApi = "http://localhost:3000/product/search-product";
  constructor(private _http:HttpClient) { }
  public getProductList():Observable<Product[]>{
    return this._http.get<Product[]>(this.productListApi);
  }
  public getProductOfCategory(id:string):Observable<Product[]>{
    return this._http.get<Product[]>(this.productOfCategpryApi+"/"+id);
  }
  public searchProduct(text:string):Observable<Product[]>{
    return this._http.get<Product[]>(this.searchProductApi+"/"+text);
  }
}

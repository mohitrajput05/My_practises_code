import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInApi = "http://localhost:3000/user/signin";
  constructor(private _http:HttpClient) { }

  public signInUser(user:User):Observable<any>{
   return this._http.post<any>(this.signInApi,user);
  }
}

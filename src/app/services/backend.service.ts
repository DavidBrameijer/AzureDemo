import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url:string = "https://azuredemo123123123.azurewebsites.net/";
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}api/Posts`);
  }

  addPost(p:Post):Observable<Post>{
    return this.http.post<Post>(`${this.url}api/Posts`, p);
  }

  addUser(u:User):Observable<User>{
    return this.http.post<User>(`${this.url}/api/Users`, u)
  }
}

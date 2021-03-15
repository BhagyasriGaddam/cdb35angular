import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
//inject http client object
  constructor(private hc:HttpClient) { }
  //get all posts
  getPosts():Observable<any>{
    return this.hc.get("https://jsonplaceholder.typicode.com/posts")
  }

  getPostById(id):Observable<any>{
    return this.hc.get("https://jsonplaceholder.typicode.com/posts/${id}")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public authToken;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  constructor(private _http:HttpClient) { 

   console.log("blog http service was called"); 

  }

  public getAllBlogs():any{
    let myResponse = this._http.get(this.baseUrl+'/all');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId):any{
   
    let myResponse = this._http.get(this.baseUrl + '/view' +'/'+currentBlogId)
    return myResponse;

  }

  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl+ '/create' + '?authToken='+this.authToken, blogData)
    return myResponse;

  }

  public deleteBlog(blogId): any{
    let data={}
    let myResponse = this._http.post(this.baseUrl+ '/' +blogId + '/delete'+'?authToken=' +this.authToken,data)
    return myResponse;

  }

  public editBlog(blogId, blogData): any{
    let myResponse = this._http.put(this.baseUrl+ '/' + blogId+'/edit'+'?authToken='+this.authToken, blogData )
    return myResponse;

  }

}

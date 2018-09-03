import { Component, OnInit, OnDestroy } from '@angular/core';
// import {BlogService} from "../blog.service";
import {BlogHttpService} from "../blog-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  // ngOnDestroy(): void{
  //   throw new Error("Method not implemented");
  // }

  public allBlogs=[

    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":"true",
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog1"
    },

    {
      "blogId":"2",
      "lastModified":"2017-10-21T21:47:51.678Z",
      "created":"2017-10-21T21:47:51.854Z",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":"true",
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog1"
    },

    {
      "blogId":"3",
      "lastModified":"2017-10-22T22:47:51.558Z",
      "created":"2017-10-21T21:47:51.854Z",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":"true",
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog1"
    }








  ]
  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home component constructor called");
  }

  ngOnInit() {
    console.log("Home component oninit called");
    this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs=data["data"];
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allBlogs);
  }
  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}

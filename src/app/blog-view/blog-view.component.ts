import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;

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

  constructor(private _route:ActivatedRoute,private router:Router) { 

    console.log("Constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.getSingleBlogInformation(myBlogId);
  }

  ngOnDestroy(){
    console.log("blog view destroyed");
  }


  public getSingleBlogInformation(currentBlogId): any{

    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    console.log(this.currentBlog);
  }

}

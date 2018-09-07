import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
// import { ActivatedRoute,Router } from '@angular/router';
// import { ToastaModule } from 'ngx-toasta';
import {ToastaService} from 'ngx-toasta';
import {ToastaConfig} from 'ngx-toasta';
import {ToastOptions} from 'ngx-toasta';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  // constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router,public toastr:ToastaModule)
  // {
  //   this.toastr;
  // }
  constructor(private blogHttpService:BlogHttpService,private toastaService:ToastaService, private toastyConfig: ToastaConfig, private ToastOptions: ToastOptions) { 
    // Assign the selected theme name to the `theme` property of the instance of ToastaConfig. 
    // Possible values: default, bootstrap, material
    this.toastyConfig.theme = 'material';
}
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];


  ngOnInit() {
  }

  // addToast() {
    
  //   this.toastaService.default('Hi there');
    
  //   var toastOptions:ToastOptions = {
  //       title: "My title",
  //       msg: "The message",
  //       showClose: true,
  //       timeout: 5000,
  //       theme: 'default',
  //       onAdd: (toast:ToastData) => {
  //           console.log('Toast ' + toast.id + ' has been added!');
  //       },
  //       onRemove: function(toast:ToastData) {
  //           console.log('Toast ' + toast.id + ' has been removed!');
  //       }
  //   };
    
    
  //   this.toastaService.info(toastOptions);
  //   this.toastaService.success(toastOptions);
  //   this.toastaService.wait(toastOptions);
  //   this.toastaService.error(toastOptions);
  //   this.toastaService.warning(toastOptions);
  // }
  public createBlog(): any{
    let blogData ={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastaService.default({
          title: "Toast It!",
          msg: "Mmmm, tasties...",
          showClose: true,
          timeout: 1000,
          theme: "default"
      });
    },
         
      error =>{
        console.log("some error occurred");
        console.log(Error);
        this.toastaService.error("Some error occured");
      }


    )
  }

}

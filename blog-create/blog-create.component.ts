import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
// import { ActivatedRoute,Router } from '@angular/router';
// import { ToastaModule } from 'ngx-toasta';
import {ToastaService} from 'ngx-toasta';
import {ToastaConfig} from 'ngx-toasta';
import {ToastOptions} from 'ngx-toasta';
import {ToastData} from 'ngx-toasta';
import {ToastaEvent} from 'ngx-toasta';
import {ToastaEventType} from 'ngx-toasta';

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
  constructor(private blogHttpService:BlogHttpService,private toastaService:ToastaService, private toastyConfig: ToastaConfig, private toastOptions: ToastOptions) { 
    // Assign the selected theme name to the `theme` property of the instance of ToastaConfig. 
    // Possible values: default, bootstrap, material
    this.toastyConfig.theme = 'material';
}
  public blogTitle:string;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];

  private insertedToasts: number[] = [];
  ngOnInit() {
    this.toastaService.events.subscribe((event: ToastaEvent) => {
      if (event.type === ToastaEventType.ADD) {
        let toast: ToastData = event.value;
        this.insertedToasts.push(toast.id);
      } else if (event.type === ToastaEventType.CLEAR_ALL) {
        this.insertedToasts = [];
      }
    });
  }

  themes = [{
    name: 'Default Theme',
    code: 'default'
  }];


  types = [{
    name: 'Default',
    code: 'default',
  }];

  options = {
    title: 'Toast It!',
    msg: 'Mmmm, tasties...',
    showClose: true,
    timeout: 5000,
    theme: this.themes[0].code,
    type: this.types[0].code
  };

  newToast() {
    let toastOptions: ToastOptions = {
      title: this.options.title,
      msg: this.options.msg,
      showClose: this.options.showClose,
      timeout: this.options.timeout,
      theme: this.options.theme,
      // position: this.options.position,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
  }
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
        // this.newToast();
        console.log("Blog Created");
        console.log(data);
      //   this.toastaService.default({
      //     title: "Toast It!",
      //     msg: "Mmmm, tasties...",
      //     showClose: true,
      //     timeout: 1000,
      //     theme: "default"
      // });
       
    },
         
      error =>{
        console.log("some error occurred");
        console.log(Error);
        this.toastaService.error("Some error occured");
      }


    )
  }

}

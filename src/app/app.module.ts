import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import {BlogService} from "./blog.service";
import {BlogHttpService} from "./blog-http.service";
import{RouterModule,Routes} from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    // NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},  
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'blog/:blogId',component:BlogViewComponent},  
    {path:'create',component:BlogCreateComponent},  
    {path:'edit/:blogId',component:BlogEditComponent}, 
      
    // {path:'**',component:NotFoundComponent}
  ])
  ],
  providers: [BlogService,BlogHttpService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

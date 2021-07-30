import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { EditAddBlogComponent } from './component/edit-add-blog/edit-add-blog.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomeComponent } from './component/home/home.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { TutorialsComponent } from './component/tutorials/tutorials.component';
import { VideosComponent } from './component/videos/videos.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
 
  {
    path:'',component:HomeComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'tutorials',component:TutorialsComponent
  },
  {
    path:'forgot',component:ForgotComponent
  },
  {
    path:'myaccount',component:MyAccountComponent,canActivate:[AuthGuard]
  },
  {
    path:'videotutorials/:id',component:VideosComponent
  },
  {
    path:'blogs',component:BlogsComponent,pathMatch:"full"
  },
  {
    path:'blogpost/:slug',component:BlogPostComponent},
   { path:'search-results/:query',component:SearchResultsComponent
  },
    {
      path:'admin',component:AdminComponent,canActivate:[AuthGuard]
    },{
      path:'newblog',component:EditAddBlogComponent,canActivate:[AuthGuard]
    },
    {
      path:'newblog/:slug',component:EditAddBlogComponent,canActivate:[AuthGuard]
    },
    {
      path:'**',redirectTo:''
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

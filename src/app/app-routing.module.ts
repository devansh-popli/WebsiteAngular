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
    path:'',redirectTo:"home",pathMatch:"full"
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'tutorials',component:TutorialsComponent,canActivate:[AuthGuard]
  },
  {
    path:'forgot',component:ForgotComponent,canActivate:[AuthGuard]
  },
  {
    path:'myaccount',component:MyAccountComponent,canActivate:[AuthGuard]
  },
  {
    path:'tutorials/:id',component:VideosComponent,canActivate:[AuthGuard]
  },
  {
    path:'blogs',component:BlogsComponent,canActivate:[AuthGuard]
  },
  {
    path:'blogs/:slug',component:BlogPostComponent,canActivate:[AuthGuard]},
<<<<<<< HEAD
   { path:'blogs/:slug',component:BlogPostComponent,canActivate:[AuthGuard]
  },
   { path:'search-results/:query',component:SearchResultsComponent
  }
=======
    {
      path:'admin',component:AdminComponent,canActivate:[AuthGuard]
    },{
      path:'newblog',component:EditAddBlogComponent,canActivate:[AuthGuard]
    },
    {
      path:'newblog/:slug',component:EditAddBlogComponent,canActivate:[AuthGuard]
    }
>>>>>>> e860f788b8b30306ff97a0586ad8c2326c78856c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

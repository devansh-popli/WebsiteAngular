import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TutorialsComponent } from './component/tutorials/tutorials.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ForgotComponent } from './component/forgot/forgot.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import {MatCardModule} from '@angular/material/card';
import { VideosComponent } from './component/videos/videos.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import { BlogsComponent } from './component/blogs/blogs.component';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { SafePipe } from './safe.pipe';
import { EditAddBlogComponent } from './component/edit-add-blog/edit-add-blog.component';
import { SlugifyPipe } from './component/slugify.pipe';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialsComponent,
    ContactUsComponent,
    NavbarComponent,
    ForgotComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    MyAccountComponent,
    VideosComponent,
    BlogsComponent,
    BlogPostComponent,
    SafePipe,
    EditAddBlogComponent,
    SlugifyPipe  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTableModule,
    CommonModule
  ],
  providers: [authInterceptorProviders,SlugifyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

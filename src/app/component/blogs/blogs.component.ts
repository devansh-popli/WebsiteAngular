import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { Blog } from 'src/blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {
blogs!:Blog[];
htmls:string="<h2>Hey there this is just testing</h2>"
role=""
  constructor(private blogService:TutorialServiceService,
    
    private router:Router) { }

  ngOnInit(): void {
    this.role=this.blogService.getUserRole();
    console.log(this.role)
   setTimeout(()=>{
     this.blogService.getBlogs().subscribe((data:any)=>
       {
         this.blogs=data;  
       })
   })
  }
  navigateToBlogsPost(blog_id:string)
  {
    this.router.navigate([`/blogpost/${blog_id}`]);
  }
  addBlog()
  {
    this.router.navigate(['newblog']);
  }
  editBlog(blog_id:string)
  {
    this.router.navigate([`/newblog/${blog_id}`]);
  }

}




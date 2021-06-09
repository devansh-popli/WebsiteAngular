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
  constructor(private blogService:TutorialServiceService,
    
    private router:Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data:any)=>
      {
        this.blogs=data;
      
      })
  }

  navigateToBlogsPost(blog_id:string)
  {
    this.router.navigate([`/blogs/${blog_id}`]);
  }


}




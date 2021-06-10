import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { Blog } from 'src/blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
blog!:Blog;
slug!:any;
  constructor(private route:ActivatedRoute,private blogService:TutorialServiceService) { }

  ngOnInit(): void {
    this.slug=this.route.snapshot.paramMap.get("slug");
    this.blogService.getBlog(this.slug).subscribe(data=>{
this.blog=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';
import { Blog } from 'src/blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
blog!:Blog;
slug!:any;
user!:User
comments:any[]=[];
  constructor(private route:ActivatedRoute,private blogService:TutorialServiceService,private router:Router) { }

  comment:any;
  reply:any;
  replies:any[]=[];
  userLogin!:boolean;
  ngOnInit(): void {
    this.blogService.isLogin.asObservable().subscribe(data=>{
      this.userLogin= this.blogService.isLoggedin();
    })
    this.slug=this.route.snapshot.paramMap.get("slug");
    this.blogService.getBlog(this.slug).subscribe(data=>{
      this.blog=data;
      this.blogService.fetchComments.next(true);
this.user=this.blogService.getUser()
    })
    this.blogService.fetchComments.asObservable().subscribe(res=>{
      if(res==true){
      this.blogService.getComment(this.blog.blog_id).subscribe((data:any[])=>{
        console.log(data+"comment")
      //this.comments=data;
      this.comments=data.sort(function(x, y){
        let d1:any=new Date(y.created_at)
        let d2:any=new Date(x.created_at)
        return d1-d2
    }) 
    console.log(this.comments)
     this.comment=null  
      }) 
    }
    })
   
  }
  submitComment(parentsno?:any){
    this.user=this.blogService.getUser()
    console.log(this.comment+"test")
    var parentSno:any
    if(parentsno!=null)
    {
      parentSno=parentsno
      this.comment=this.reply;
    }
    else{
       parentSno=""
    }
    this.blogService.postComment(this.comment,this.slug,this.user.email,parentSno).subscribe(data=>{
      console.log(data);
      this.blogService.fetchComments.next(true);
    })
  }

}

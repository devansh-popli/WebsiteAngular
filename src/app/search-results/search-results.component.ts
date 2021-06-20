import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/blog';
import { TutorialServiceService } from '../tutorial-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  blogs!:Blog[];
  htmls:string="<h2>Hey there this is just testing</h2>"
    constructor(private blogService:TutorialServiceService,
      
      private router:Router,private route:ActivatedRoute) { }
  query!:any;
    ngOnInit(): void {
      this.blogService.dosearch.asObservable().subscribe(res=>{
        this.query=this.route.snapshot.paramMap.get('query')   
        if(res==true){
          this.blogService.getBlogs().subscribe((data:any)=>
          {
             this.blogs=data; 
              this.blogs=this.blogs.filter(
                 res=>{
                   return res.heading?.toLocaleLowerCase().match(this.query?.toLocaleLowerCase());
                 }
               )
           })
          }
       })
    }
    navigateToBlogsPost(blog_id:string)
    {
      this.router.navigate([`/blogs/${blog_id}`]);
    }
  
}

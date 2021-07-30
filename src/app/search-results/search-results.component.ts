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
  blogsdata!:Blog[];
  htmls:string="<h2>Hey there this is just testing</h2>"
  query!:any;
    constructor(private blogService:TutorialServiceService,    
      private router:Router,private route:ActivatedRoute) {
        route.params.subscribe(val => {
          console.log(val.query)
         this.query=val.query
         this.blogService.dosearch.asObservable().subscribe(data=>{
           if(data===true)
           {
             this.blogs=this.blogsdata.filter(
              res=>{
                return res.heading?.toLocaleLowerCase().match(this.query?.toLocaleLowerCase());
              }
            )
           }
         })
        });
       }
 
    ngOnInit(): void { 
      setTimeout(()=>{
        this.blogService.getBlogs().subscribe((data:Blog[])=>
              {
               this.blogsdata= data;
               this.blogService.dosearch.next(true)              
        })
      })
      }


   
    navigateToBlogsPost(blog_id:string)
    {
      this.router.navigate([`/blogpost/${blog_id}`]);
    }
  
}

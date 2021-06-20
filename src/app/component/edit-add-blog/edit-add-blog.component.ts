import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { Blog } from 'src/blog';
import { SlugifyPipe } from '../slugify.pipe';
@Component({
  selector: 'app-edit-add-blog',
  templateUrl: './edit-add-blog.component.html',
  styleUrls: ['./edit-add-blog.component.css']
})
export class EditAddBlogComponent implements OnInit {
saveForm!:FormGroup
blogPost!:Blog;
  constructor(private blogService:TutorialServiceService,
    private aroute:ActivatedRoute,
    private fb:FormBuilder,private slugifyPipe:SlugifyPipe) { }
  ngOnInit(): void {
    this.saveForm=this.fb.group(
      {
        heading:[''],
        detailBlog:[''],
        content:[''],
      }
    );
let slugId:any=this.aroute.snapshot.paramMap.get('slug');
this.blogService.getBlog(slugId).subscribe(response=>
  {
    this.saveForm.patchValue(response);
  })
  }
  saveBlog()
  {
    let slug=this.slugify(this.saveForm.get('heading')?.value);
    this.blogPost=this.saveForm.value;
    this.blogPost.blog_id=slug;
    this.blogService.postBlogs(this.blogPost).subscribe(response=>
      {
        console.log(response);
      })
  }
  slugify(input: string){
    var your_new_slug = this.slugifyPipe.transform(input);
    return your_new_slug;
}

}

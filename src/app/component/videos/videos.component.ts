import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { Video } from 'src/video';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos!:Video[]
safeURL!:any;
public id:any;
  constructor(private route:ActivatedRoute,
    private service:TutorialServiceService,private sanitizer: DomSanitizer) { 
     
    }

  ngOnInit(): void 
  {
   let id1=this.route.snapshot.paramMap.get("id");
   this.id=id1;
   setTimeout(()=>{

     this.service.getVideos(this.id).subscribe(
       data=>
       {
         this.videos=data;
         this.videos.forEach((v:Video)=>
         {
            v.src=<string>this.sanitizer.bypassSecurityTrustResourceUrl(v.src);
         })
       }
     )
   })
  }

}

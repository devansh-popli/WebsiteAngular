import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { Video } from 'src/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos!:Video[]
public id:any;
  constructor(private route:ActivatedRoute,
    private service:TutorialServiceService) { }

  ngOnInit(): void 
  {
   let id1=this.route.snapshot.paramMap.get("id");
   this.id=id1;
   this.service.getVideos(this.id).subscribe(
     data=>
     {
       this.videos=data;
     }
   )
  }

}

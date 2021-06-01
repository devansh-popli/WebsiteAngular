import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/model';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
 cards!:Model[];

  constructor(private service:TutorialServiceService,
    private router:Router) { }

  ngOnInit(): void
  {
    this.service.getCards().subscribe(data=>
      {
        this.cards=data;
      });

  }
  navigate(cardId:number)
  {
    this.router.navigate([`/videos/${cardId}`]);
  }

}

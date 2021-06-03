import { Component } from '@angular/core';
import { TutorialServiceService } from './tutorial-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loaderService:TutorialServiceService){

  }
  title = 'tutorial-website';
}

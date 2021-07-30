import { Component } from '@angular/core';
import { TutorialServiceService } from './tutorial-service.service';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loaderService:TutorialServiceService){

  }
  title = 'tutorial-website';
  // @HostListener("window:beforeunload",["$event"])
  //   clearLocalStorage(event: any){
  //       localStorage.clear();
  //   }
}

import { Component, OnInit } from '@angular/core';
import { TutorialServiceService } from 'src/app/tutorial-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn=false;
  constructor(private loginService:TutorialServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedin()
  }

}

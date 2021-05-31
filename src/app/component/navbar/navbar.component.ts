import { Component, OnInit } from '@angular/core';
import { TutorialServiceService } from 'src/app/tutorial-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
    constructor(private loginService:TutorialServiceService) { }
  
    ngOnInit() {
     
      this.isLoggedIn=this.loginService.isLoggedin()
    }
    logoutUser()
    {
      this.isLoggedIn=false;
      this.loginService.logout()
    }
   
}

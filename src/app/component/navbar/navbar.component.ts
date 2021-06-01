import { Component, OnInit } from '@angular/core';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  user!:User
    constructor(private loginService:TutorialServiceService) { }
  
    ngOnInit() {
    this.user= this.loginService.getUser();
      this.isLoggedIn=this.loginService.isLoggedin()
    }
    logoutUser()
    {
      this.isLoggedIn=false;
      this.loginService.logout()
    }
   
}

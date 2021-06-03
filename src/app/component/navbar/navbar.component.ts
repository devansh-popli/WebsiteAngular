import { Component, OnInit } from '@angular/core';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn!:any;
  user!:User
    constructor(private loginService:TutorialServiceService) { }

    ngOnInit() {
      this.loginService.isLogin.subscribe(data=>{
        console.log(data)
        this.isLoggedIn=data;
      })
    this.user= this.loginService.getUser();
      this.isLoggedIn=this.loginService.isLoggedin()
    }
    logoutUser()
    {
      this.loginService.isLogin.next(false);
      this.loginService.logout()
    }
   
}

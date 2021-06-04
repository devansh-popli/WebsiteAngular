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
      this.loginService.isLogin.asObservable().subscribe((data:any)=>{
        console.log(data)
        this.isLoggedIn=this.loginService.isLoggedin();
        this.user= this.loginService.getUser();
        console.log(this.user)
      })
     // this.isLoggedIn=this.loginService.isLoggedin()
    }
    LogoutUser()
    {
      this.loginService.logout()
      this.loginService.isLogin.next(false);
    }
   
}

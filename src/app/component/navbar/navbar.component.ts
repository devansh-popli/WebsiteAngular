import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  firstName:any
  constructor(private loginService:TutorialServiceService, private router:Router) { }
    ngOnInit() {
      // this.loginService.searchName.asObservable().subscribe((data:any)=>{
      //   this.firstName=data;
      // });
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
      this.router.navigate(['home'])
    }
   
   Search()
   {
this.loginService.searchName.next(this.firstName)
   }
}

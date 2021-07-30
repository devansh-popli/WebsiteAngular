import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn!:any;
  user!:User
  searchItem:any
  constructor(private loginService:TutorialServiceService, private router:Router,private _snackBar: MatSnackBar) { } 
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
      this._snackBar.open("You Logged out Successfully", "",{
        verticalPosition:"top",
        duration:5000,
        panelClass: ['success-snackbar']
      });
      this.loginService.isLogin.next(false);
     this.router.navigate([''])
    }
    navigateTo(){
      this.router.navigate(['/'])
    }
   Search()
   {
     //console.log("href"+window.location.pathname.includes('search-results'))
    if( window.location.pathname.includes('search-results')){
     this.router.navigate([`/search-results/${this.searchItem}`])
     this.searchItem=""
    }
    else{
      this.loginService.dosearch.next(false)   
      this.router.navigate([`/search-results/${this.searchItem}`])
     this.searchItem=""
    }
      // this.loginService.dosearch.next(true);
     console.log("done ")
   }
}

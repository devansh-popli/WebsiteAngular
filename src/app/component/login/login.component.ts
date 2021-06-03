import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  error = '';
  user:User=new User();
  message!: string;
  @ViewChild('myDiv') myDiv!: ElementRef<HTMLElement>;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpService:TutorialServiceService) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: [
          '',
          [Validators.required]
        ],
        password: ['', Validators.required]
      });
      
    }
    get form() {
      return this.loginForm.controls;
    }
    get e()
    {
      return this.loginForm.get("username");
    }
    login()
    {
      
      this.user=this.loginForm.value;
      console.log(this.user);
      if(this.user.username === null || this.user.username.trim()=='')
          {
            console.log("fill username");
            this.message="Please Fill Required Fields"
            return;
          }
          if(this.user.password === null || this.user.password.trim()=='')
          {
            console.log("fill username");
            this.message="Password is Required"
            return;
          }
          else{   
         this.httpService.loginUser(this.user).subscribe((data:any)=>
        {
          console.log(data.jwt);
          this.httpService.saveToken(data.jwt);
          this.httpService.getCurrentUser().subscribe(data=>{
           this.httpService.setUser(data); 
           console.log(data)
           console.log("user saved in local storage")
           let el: HTMLElement = this.myDiv.nativeElement;
           el.click();
           this.httpService.isLogin.next(true);
         //  location.reload()
          })
          console.log("success")
        },(error)=>{
          console.log("error")
          console.log(error)
        })
      }      
    }
}

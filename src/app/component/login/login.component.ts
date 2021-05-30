import { Component, OnInit } from '@angular/core';
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
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpService:TutorialServiceService) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: [
          '',
          [Validators.required, Validators.email, Validators.minLength(5)]
        ],
        password: ['', Validators.required]
      });
      
    }
    get form() {
      return this.loginForm.controls;
    }
    get e()
    {
      return this.loginForm.get("email");
    }
    login()
    {
      this.user=this.loginForm.value;
      console.log(this.user);
      this.httpService.loginUser(this.user).subscribe(data=>
        {
          if(data === null)
          {
            console.log("Login unsuccessfull");
          }
          else{
            this.router.navigate(['/tutorials']);
          }
        })
      
    }
}

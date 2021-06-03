import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/password.validator';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup
  user:User=new User();
  message1!:string;
  message2!:string;
  otpmessage!: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpservice:TutorialServiceService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      name:['',Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      otp: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    },{
      validator:PasswordValidator
    });
  }
  get f()
  {
    return this.signupForm.controls;
  }
  sendOTP(){
    let email= this.signupForm.get('email')?.value
    this.httpservice.sendOTP(email).subscribe(response=>{
      console.log(response)
      console.log("OTP sent")
      this.otpmessage="otp sent successfully"
    });
  }
  submit()
  {
    if(!this.signupForm.valid)
{
  console.log("please fill the required fields first");
  this.message2="please fill the required fields first";
  return;
}
    this.user=this.signupForm.value;
    this.httpservice.signUser(this.user).subscribe(data=>
      {
        console.log(data);
       this.message1="Successfully Saved!"
      },error=>{

        console.log(error)
        this.message2="Email already exists";
      });
  }
  onClose()
  {
    // this.signupForm.patchValue(new User());
    this.message1="";
    this.message2="";
    this.otpmessage="";
  }

}

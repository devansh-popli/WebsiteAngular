import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/password.validator';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup
  user:User=new User();
  message!:string;
  message2!:string;
  otpmessage!: string;
  load:boolean=false;
  load2: boolean=false;
  @ViewChild('myDiv') myDiv!: ElementRef<HTMLElement>;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpservice:TutorialServiceService,  private _snackBar: MatSnackBar) { }

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
    this.load=true;
    let email= this.signupForm.get('email')?.value
    this.httpservice.sendOTP(email).subscribe(response=>{
      console.log(response)
      console.log("OTP sent")
      this.otpmessage="otp sent successfully"
      this.load=false;
    });
  }
  submit()
  {
    this.load2=true;
    if(!this.signupForm.valid)
{
  console.log("please fill the required fields first");
  this.message2="please fill the required fields first";
  this.load2=false;
  return;
}
    this.user=this.signupForm.value;
    this.httpservice.signUser(this.user,this.signupForm.get('otp')?.value).subscribe(data=>
      {
        console.log(data);
       this.message="Successfully Registered! You can Login Now"
       this.load2=false;
       let el: HTMLElement = this.myDiv.nativeElement;
           el.click();
       this._snackBar.open(this.message, "",{
        verticalPosition:"top",
        duration:5000,
        panelClass: ['success-snackbar']
      });
      },(error:any)=>{  

        console.log(error)
        this.message2=" Username/Email already exists or OTP was wrong";
        this.load2=false;
      });
  }
  onClose()
  {
    // this.signupForm.patchValue(new User());
    this.message2="";
    this.message2="";
    this.otpmessage="";
  }

}

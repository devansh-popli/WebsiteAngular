import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
updateForm!:FormGroup;
changePassword!:FormGroup;
form!:User;
updatepassword:any={
  oldpassword:"",
  password:"user",
  username:"user"

}
updateUser:any={
  name:"user",
  email:"user",
  phone:"user",
  username:"user"
}
  constructor(private formBuilder: FormBuilder,
    private updService:TutorialServiceService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required] ],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.form=this.updService.getUser();
    console.log(this.form.name);

    this.updateForm.patchValue({
      name:this.form.name,
      phone:this.form.phone,
       email:this.form.email
    })

    this.changePassword = this.formBuilder.group({
     password: ['', [Validators.required] ],
     npassword: ['', Validators.required],
      changepass: ['', Validators.required]
    });
  }

  public updateUserForm()
  {
    if(!this.updateForm.invalid)
    {
    this.updateUser=this.updateForm.value;
    this.updateUser.username=this.form.username;
    console.log(this.updateUser);
    this.updService.updateUser(this.updateUser).subscribe(data=>
      {
        this.form.name=this.updateUser.name;
        this.form.email=this.updateUser.email;
        this.form.phone=this.updateUser.phone;
          this.updService.setUser(this.form);
        console.log("The data is succesfully updated",data);
      })
    }
    else{
this.snackbar.open("Please fill all fields correctly","")
    }
  }

  public updatePassword()
  {
    console.log(this.changePassword.get("password")?.value);
    console.log(this.form.password);

    this.updatepassword.oldpassword=this.form.password;
      this.updatepassword.password=this.changePassword.get('npassword')?.value;
      this.updatepassword.username=this.form.username;
      console.log(this.updatepassword)
      this.updService.updatePassword(this.updatepassword).subscribe(data=>
        {
          this.updService.logout();
          this.updService.isLogin.next(false);
          this.router.navigate([''])
          this.snackbar.open("password successfull changed kindly login again!!", "",{
            verticalPosition:"top",
            duration:5000,
            panelClass: ['success-snackbar']
          });
          console.log("Password changed ",data);
        },
        (error)=>{
           this.snackbar.open("you have entered wrong password")
        })
  }

}

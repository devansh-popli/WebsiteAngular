import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TutorialServiceService } from 'src/app/tutorial-service.service';
import { User } from 'src/app/user';

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
    private updService:TutorialServiceService) { }

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
    this.updateUser=this.updateForm.value;
    this.updateUser.username=this.form.username;
    console.log(this.updateUser);
    this.updService.updateUser(this.updateUser).subscribe(data=>
      {

        console.log("The data is succesfully updated",data);
      })
  }

  public updatePassword()
  {
    console.log(this.changePassword.get("password")?.value);
    if(this.form.password == this.changePassword.get("password")?.value)
    {
      this.updatepassword.password=this.changePassword.get('npassword')?.value;
      this.updatepassword.username=this.form.username;
      console.log(this.updatepassword)
      this.updService.updatePassword(this.updatepassword).subscribe(data=>
        {
          this.form.password=this.updatepassword.password;
          this.updService.setUser(this.form);
          console.log("Password changed ",data);
        })
    }
  }

}

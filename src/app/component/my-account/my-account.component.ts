import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
updateForm!:FormGroup
changePassword!:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required] ],
      phone: ['', Validators.required],
      email: ['', Validators.required, Validators.email, Validators.minLength(5)]
    });

    this.changePassword = this.formBuilder.group({
     password: ['', [Validators.required] ],
     npassword: ['', Validators.required],
      changepass: ['', Validators.required]
    });
  }

}

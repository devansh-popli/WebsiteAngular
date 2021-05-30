import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      query:['',Validators.required]
      
    });
  }
}

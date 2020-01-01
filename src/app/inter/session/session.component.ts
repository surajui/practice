import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(private fb:FormBuilder,private r:Router) { }
  registerForm:FormGroup;
  applyFormValues:any;
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      emailAddress:['',Validators.required],
    })
  }

   onSubmit(){
   this.r.navigate(['/localstorage'])
  }
}

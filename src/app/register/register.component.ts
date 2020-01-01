import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MainsService } from '../mains.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formBuilder: any;
  submitted= false;
  marked = false;
  theCheckbox = false;
  // loading=false;

  constructor(private s:MainsService,private fb:FormBuilder,private location:LocationStrategy) { 
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
  history.pushState('/main', null, window.location.href);
   });  
  }

  ngOnInit() {
   
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender:['',Validators.required],
      mobileNum:['',Validators.required],
      dob:['',Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // this.loading = true;
    this.s.register(this.registerForm.value).subscribe(resp=>{
        console.log(resp);
    })
        
}
toggleVisibility(e){
  this.marked= e.target.checked;
}
public showMyMessage = false
//public showMyMessage1 = false
showMessageSoon(){
  this.showMyMessage=true;
  //this.showMyMessage1=true;
  //return this.showMyMessage;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MainsService } from 'src/app/mains.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {

  constructor(private s:MainsService,private fb:FormBuilder,private routes:Router) { }
  registerForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    emailAddress:['',Validators.required],
    gender:[''],
  })
  onSubmit(){
    // this.s.form_data(this.registerForm.value).subscribe(resp=>{
    //   console.log(resp);
    // })
  }
  preview(){
this.routes.navigate(["/session"]);
  }
  
  toggleVisibility(e){
  this.marked=e.target.checked;
  }
  marked = false;
  theCheckbox = false;
  
  ngOnInit() {
  
    this.registerForm.valueChanges.subscribe(form => {
      sessionStorage.setItem('form', JSON.stringify(form));
      });
      let formValues = sessionStorage.getItem('form');

      if (formValues) {
        this.applyFormValues(this.registerForm, JSON.parse(formValues));
      }
      else{
        this. preview()
      }
  }
  private applyFormValues (group, formValues) {
    Object.keys(formValues).forEach(key => {
      let formControl = <FormControl>group.controls[key];
      
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      }
       else {
        formControl.setValue(formValues[key]);
      }
    });
  }
 
}

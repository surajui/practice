import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form Validation';
  registerForm:FormGroup;
  users: any[]=[];
  constructor(private fb:FormBuilder){
  
  }
  get f() { return this.registerForm.controls; }
  ngOnInit(){
    this.registerForm=this.fb.group({
      first_name:['',[Validators.required,Validators.maxLength(16)]],
      last_name:['',[Validators.required,Validators.maxLength(16)]],
      email:['',[Validators.email,Validators.required]],
      mobile:['',[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}$')]],
      gender:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }
  saveData(registerForm){
    this.users.push(registerForm);
    console.log(this.users);
  }
  
}

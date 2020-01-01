import { Component, OnInit } from '@angular/core';
import { MainsService } from '../mains.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-multidrop',
  templateUrl: './multidrop.component.html',
  styleUrls: ['./multidrop.component.css']
})
export class MultidropComponent implements OnInit {
  result:any;
  result2:any;
  constructor(private s:MainsService,private http:HttpClient,private fb:FormBuilder) { }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


 registerForm = this.fb.group({
  firstname: ['', Validators.required],
  lastname: ['', Validators.required],
  drop:['',Validators.required],
  recaptchaReactive:['',Validators.required]
})

  ngOnInit() {
    this.s.get2_data().subscribe(resp=>{
      this.result2=resp;
    })


    this.allget();
    this.dropdownSettings = {
      idField: 'item',
      textField: 'itemtext',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  // dropdown looping start

allget(){
  let tmp = [];
this.s.get_Data().subscribe(resp=>{
  this.result=resp
  for(let i=0; i< this.result.length;i++){
    tmp.push({item:i,itemtext:resp[i].city})
  }
  this.dropdownList =tmp;
})
}
onSelectAll(){
}
onItemSelect(){}

 // dropdown looping end


// post Data
onSubmit(){
  this.s.create_data1(this.registerForm.value).subscribe(resp=>{
    console.log(resp);
  })
}
drop:any;
firstname:any;
lastname:any;
edit(id){
this.registerForm.patchValue({
  firstname:id.firstname,
  lastname:id.lastname,
  drop:id.drop
})
}
public resolved(captchaResponse: string) {
  console.log(`Resolved captcha with response: ${captchaResponse}`);
}
}


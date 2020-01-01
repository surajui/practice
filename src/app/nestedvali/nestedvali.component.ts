import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MainsService } from '../mains.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-nestedvali',
  templateUrl: './nestedvali.component.html',
  styleUrls: ['./nestedvali.component.css']
})
export class NestedvaliComponent implements OnInit {

  constructor(private fb:FormBuilder,private s:MainsService,private router:Router) { }
reactive:FormGroup;
  ngOnInit() {
    this.reactive=this.fb.group({
      id:[''],
      fname:['',Validators.required],
      lname:['',Validators.required],
      address:this.fb.array(
        [
       this.all_add()
      ],
      [Validators.required]
      ),
      education:this.fb.array(
        [this.all_edu()],
        [Validators.required]
      )
  })
//   history.pushState(null, null, location.href);
//   window.onpopstate = function(event) {
//    history.go(1);
// };
  this.all_main()
}
all_add(){
  return this.fb.group({
   city:['',Validators.required],
   pincode:['',Validators.required] 
  })
}

// all education

all_edu(){
  return this.fb.group({
    inter:['',Validators.required],
    btech:['',Validators.required],
    ssc:['',Validators.required]
  })
}

// address

get address():FormArray{
  return this.reactive.get('address') as FormArray;
}

// education

get education():FormArray{
  return this.reactive.get('education') as FormArray;
}

all_main(){
  this.s.get_Data().subscribe(resp=>console.log(resp));
}
submit(){
  this.s.post_data(this.reactive.value).subscribe(resp=>{
    console.log(resp)
    this.router.navigate(["narraytable"]) 
  })
  // this.router.navigate(['narraytable']);
  this.all_main();
}
}
  

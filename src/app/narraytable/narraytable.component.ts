import { Component, OnInit } from '@angular/core';
import { MainsService } from '../mains.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-narraytable',
  templateUrl: './narraytable.component.html',
  styleUrls: ['./narraytable.component.css']
})
export class NarraytableComponent implements OnInit {
  result;
  reactive: FormGroup;
  constructor(private s: MainsService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.reactive = this.fb.group({
      id: [''],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: this.fb.array(
        [
          this.all_add()
        ],
        [Validators.required]
      ),
      education: this.fb.array(
        [this.all_edu()],
        [Validators.required]
      )
    })
    this.all_main()
  }
  all_add() {
    return this.fb.group({
      city: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }

  // all education

  all_edu() {
    return this.fb.group({
      inter: ['', Validators.required],
      btech: ['', Validators.required],
      ssc: ['', Validators.required]
    })
  }

  // address

  get address(): FormArray {
    return this.reactive.get('address') as FormArray;
  }

  // education

  get education(): FormArray {
    return this.reactive.get('education') as FormArray;
  }

  all_main() {
    this.s.get_Data().subscribe(resp => {
      this.result = resp
      console.log(this.result);

    })
  }
  edit(a) {
    this.reactive.setValue({
      id: a.id,
      fname: a.fname,
      lname: a.lname,
      address: a.address,
      education: a.education
    })
  }
  update() {
    this.s.update(this.reactive.value).subscribe(resp => {
      console.log(resp)
      this.all_main();
    })

  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainsService } from 'src/app/mains.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-firstyr',
  templateUrl: './firstyr.component.html',
  styleUrls: ['./firstyr.component.css']
})
export class FirstyrComponent implements OnInit {
  result: Object;
  firstname: string;
  lastname: string;
  constructor(private fb: FormBuilder, private s: MainsService, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(params => {
    //   this.id = params["id"];
    //   this.lastname = params["lastname"];
    // });
  }
  ngOnInit() {
    this.get_all();
  }
  get_all() {
    this.s.form_data().subscribe(resp => {
      this.result = resp
    })
  }
  reactive = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', Validators.required]
  })
  firstName: string;
  id: number;
  empList: Array<{ firstName: string, id: number }> = [];
  onSubmit() {
    this.s.create_data(this.reactive.value).subscribe(resp => {
      console.log(resp);
      this.get_all();
    })
  }
  update(s) {
    this.s.update_data1(s).subscribe(resp => {
      console.log(resp);
      this.get_all();
    })
  }
  delete(s) {
    this.s.delete_data1(s.id).subscribe(resp => {
      console.log(resp);
      this.get_all();
    })
  }
}

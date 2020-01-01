import { Component, OnInit } from '@angular/core';
import { MainsService } from '../mains.service';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
  result: any=[];
  userlist: any=[];
  
  constructor(private s:MainsService) { }
  //client_id:any;
  ngOnInit() {
    this.s.ageincredre().subscribe(
      (user: any[]) => {
        this.result=user;
        console.log(this.result)
      },
    );
  }

}

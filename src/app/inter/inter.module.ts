import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { SessionComponent } from './session/session.component';


const routes: Routes = [
 {path:'localstorage',component:LocalstorageComponent},
 {path:'session',component:SessionComponent}
  ]
@NgModule({
  declarations: [LocalstorageComponent, SessionComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule,FormsModule
  ]
})
export class InterModule { 
  constructor(){
    console.log('this is intermodule')
  }
}

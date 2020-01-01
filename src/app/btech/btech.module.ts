import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstyrComponent } from './firstyr/firstyr.component';
import { SecondyrComponent } from './secondyr/secondyr.component';
import { ThirdyrComponent } from './thirdyr/thirdyr.component';
import { Routes,RouterModule  } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
{path:'firstyr',component:FirstyrComponent},
{path:'secondyr',component:SecondyrComponent},
{path:'thirdyr',component:ThirdyrComponent}
]
@NgModule({
  declarations: [FirstyrComponent, SecondyrComponent, ThirdyrComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class BtechModule { 
  constructor(){
    console.log('this is btechmodule');
  }

}

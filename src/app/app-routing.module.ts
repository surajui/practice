import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultidropComponent } from './multidrop/multidrop.component';
import { NestedvaliComponent } from './nestedvali/nestedvali.component';
import { MainComponent } from './main/main.component';
import { NarraytableComponent } from './narraytable/narraytable.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { RegisterComponent } from './register/register.component';
import { BoyageComponent } from './boyage/boyage.component';
import { NestedComponent } from './nested/nested.component';
// import { RecaptchaModule } from 'ng-recaptcha';


const routes: Routes = [
  {path:'',component:MainComponent,pathMatch:'full'},
  {path: '', loadChildren: () => import('./inter/inter.module').then(m => m.InterModule) },
  {path: '', loadChildren: () => import('./btech/btech.module').then(m => m.BtechModule) },
  {path:'multidrop',component:MultidropComponent},
  {path:'nestedvali',component:NestedvaliComponent},
  {path:'narraytable',component:NarraytableComponent},
  {path:'imageupload',component:ImageuploadComponent},
  {path:'register',component:RegisterComponent},
  {path:'boyage',component:BoyageComponent},
  {path:'nested',component:NestedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

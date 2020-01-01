import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MultidropComponent } from './multidrop/multidrop.component';
import { MainsService } from './mains.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NestedvaliComponent } from './nestedvali/nestedvali.component';
import { MainComponent } from './main/main.component';
import { NarraytableComponent } from './narraytable/narraytable.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { RegisterComponent } from './register/register.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BoyageComponent } from './boyage/boyage.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NestedComponent } from './nested/nested.component';
import { RecaptchaModule, RecaptchaFormsModule ,RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    MultidropComponent,
    NestedvaliComponent,
    MainComponent,
    NarraytableComponent,
    ImageuploadComponent,
    RegisterComponent,
    BoyageComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RecaptchaModule,RecaptchaFormsModule,FormsModule,MultiSelectAllModule,ReactiveFormsModule,HttpClientModule,Ng5SliderModule, NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [{
    provide:RECAPTCHA_SETTINGS,
    useValue:{siteKey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'} as RecaptchaSettings
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('this is main module')
  }
}

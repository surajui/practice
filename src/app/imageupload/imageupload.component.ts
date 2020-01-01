import { Component, OnInit } from '@angular/core';
import { MainsService } from '../mains.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  imageupload:FormGroup;
  selectedFile: File
  url:any;
  base64textString = [];
  fileData:File=null;
  result;
  constructor(private s:MainsService,private sanitizer:DomSanitizer,private fb:FormBuilder) { }

  ngOnInit() {
   this.imageupload=this.fb.group({
    img:['']
   })
  }
   onSelectFile(event) {
     if (event.target.files && event.target.files[0]) {
       var reader = new FileReader();
  
       reader.readAsDataURL(event.target.files[0]); // read file as data url
  
       reader.onload = (event:Event) => { // called once readAsDataURL is completed
         this.url = reader.result;      
        //  localStorage.setItem('imageurl',this.url)
       }
      
      }
 
    }
  onUpload(){
    const formData = new FormData();
      formData.append('file', this.fileData);
    var obj={}
  obj['picture']=this.url

   this.s.image_data(obj).subscribe(resp=>{
     console.log(resp);
     alert('SUCCESS !!');
     this.s.image_get().subscribe(resp=>this.result=resp)
   })
   
  }
 
  base64Image:string;
transform()
 {
return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image=this.url);
 }
  }

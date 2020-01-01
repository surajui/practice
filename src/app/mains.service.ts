import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainsService {

  constructor(private http:HttpClient) { }

  base_url='http://localhost:3000/storedata'
  get_Data(){
  return this.http.get(' http://localhost:3000/multidrop')
  }
  post_data(a){
    return this.http.post('http://localhost:3000/comments',a)
  }
  update(a){
    return this.http.put('http://localhost:3200/comments/'+a.id, a)
  }
  // fetch nested array object service

  fetch(){
    return this.http.get('http://localhost:3000/nested')
  }

  image_data(file){
    return this.http.post('http://localhost:3000/image/',file)
  }
  image_get() {
    return this.http.get("http://localhost:3000/image")
  }
  register(user) {
    return this.http.post("http://localhost:3000/image",user);
}


ageincredre(){
  return this.http.get("http://localhost:3000/ageincre")
}

create_data(s){
  let params = new HttpParams();
  params = params.append('personid',this.id),
  params = params.append('lastname',this.lastname)
  return this.http.post("http://localhost:3000/storedata",s,{params:params})
}
firstname:any;
lastname:any;
id:any;
form_data(){
  
  return this.http.get("http://localhost:3000/storedata")
}
update_data1(s){
  return this.http.put(this.base_url+ '/' + s.id,s)
}
delete_data1(s){
  return this.http.delete("http://localhost:3000/storedata/" + s)
}
create_data1(a){
return this.http.post('http://localhost:3000/pst_data',a)
}
get2_data(){
  return this.http.get('http://localhost:3000/pst_data')
}
}

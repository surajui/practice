import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainsService } from '../mains.service';
@Component({
  selector: 'app-boyage',
  templateUrl: './boyage.component.html',
  styleUrls: ['./boyage.component.css']
})
export class BoyageComponent implements OnInit {

  count: number = 0;

  boy1Value = 0;
  boy1Options: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };

  boy2Value = 0;
  boy2Options: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };

  girl1Value = 7;
  girl1Options: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };

  girl2Value = 12;
  girl2Options: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };
  boyValue = 0;
  boyOptions: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };

  girlValue = 0;
  girlOptions: Options = {
    floor: 0,
    ceil: 18,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '';
    },
  };
  boy1Age: number;
  family: Object;



  constructor(private s:MainsService) { }

  ngOnInit() {


    //this.familyPref.controls.family['age_of_boys'].patchValue(localStorage.getItem('age_of_boys'))
  }
  familyPref = new FormGroup({
    boy1Age: new FormControl(''),
    boy2Age: new FormControl(''),
    girl1Age: new FormControl(''),
    girl2Age: new FormControl(''),
    boyorgirlAge: new FormControl(''),
    //girl: new FormControl(''),
  });

  public counterBoy: number = 0;
  public counterGirl: number = 0;
  public counterBoth: number = 0;

  incrementBoy() {
    this.counterBoy += 1;
    console.log('counter+boy, no.of boys', this.counterBoy)
  }

  decrementBoy() {
    this.counterBoy -= 1;
    console.log('counter-boy, no.of boys', this.counterBoy)
  }
  incrementGirl() {
    this.counterGirl += 1;
    console.log('counter+girl, no.of girls', this.counterGirl)
  }

  decrementGirl() {
    this.counterGirl -= 1;
    console.log('counter-girl, no.of girls', this.counterGirl)
  }
  incrementBoth() {
    this.counterBoth += 1;
    console.log('counter+both 1', this.counterBoth)
  }

  decrementBoth() {
    // this.counterBoth += 1;
    this.counterBoth -= 1;
    console.log('counter-both 0', this.counterBoth)
  }


  number_of_boys: number
  boyages: any;
  girlages: any;
  onSubmit(family) {

    //  this.s.ageincredre(this.familyPref.value).subscribe(resp=>{
    //    this.family=resp
    //    console.log(this.family);
    //  })
    this.boyages = [this.familyPref.get('boy1Age').value, this.familyPref.get('boy2Age').value]
    family['age_of_boys'] = this.boyages.toString();
    family['number_of_boys'] = this.counterBoy,


      this.girlages = [this.familyPref.get('girl1Age').value, this.familyPref.get('girl2Age').value]
    family['age_of_girls'] = this.girlages.toString();
    family['number_of_girls'] = this.counterGirl,


      family['boyorgirlAge'] = this.familyPref.get('boyorgirlAge').value
      family['counterBoth'] = this.counterBoth,
    console.log(family)
    localStorage.setItem('age_of_boys', family['age_of_boys'])
    localStorage.setItem('number_of_boys', family['number_of_boys'])
    localStorage.setItem('age_of_girls', family['age_of_girls'])
    localStorage.setItem('number_of_girls', family['number_of_girls'])
    localStorage.setItem('boyorgirlAge', family['boyorgirlAge'])
    localStorage.setItem('binarycount', family['counterBoth'])


  }


}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyrComponent } from './secondyr.component';

describe('SecondyrComponent', () => {
  let component: SecondyrComponent;
  let fixture: ComponentFixture<SecondyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

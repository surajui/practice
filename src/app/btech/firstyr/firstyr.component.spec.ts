import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstyrComponent } from './firstyr.component';

describe('FirstyrComponent', () => {
  let component: FirstyrComponent;
  let fixture: ComponentFixture<FirstyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

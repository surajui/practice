import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyageComponent } from './boyage.component';

describe('BoyageComponent', () => {
  let component: BoyageComponent;
  let fixture: ComponentFixture<BoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

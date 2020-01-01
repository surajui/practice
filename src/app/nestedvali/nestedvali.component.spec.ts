import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedvaliComponent } from './nestedvali.component';

describe('NestedvaliComponent', () => {
  let component: NestedvaliComponent;
  let fixture: ComponentFixture<NestedvaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedvaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedvaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

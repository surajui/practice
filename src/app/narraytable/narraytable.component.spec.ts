import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarraytableComponent } from './narraytable.component';

describe('NarraytableComponent', () => {
  let component: NarraytableComponent;
  let fixture: ComponentFixture<NarraytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarraytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarraytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

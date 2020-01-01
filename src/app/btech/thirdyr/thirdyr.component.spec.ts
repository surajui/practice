import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdyrComponent } from './thirdyr.component';

describe('ThirdyrComponent', () => {
  let component: ThirdyrComponent;
  let fixture: ComponentFixture<ThirdyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

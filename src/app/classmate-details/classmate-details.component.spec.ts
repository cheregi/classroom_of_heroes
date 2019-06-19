import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmateDetailsComponent } from './classmate-details.component';

describe('ClassmateDetailsComponent', () => {
  let component: ClassmateDetailsComponent;
  let fixture: ComponentFixture<ClassmateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassmateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

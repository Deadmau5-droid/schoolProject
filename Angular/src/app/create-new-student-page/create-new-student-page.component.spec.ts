import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewStudentPageComponent } from './create-new-student-page.component';

describe('CreateNewStudentPageComponent', () => {
  let component: CreateNewStudentPageComponent;
  let fixture: ComponentFixture<CreateNewStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewStudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

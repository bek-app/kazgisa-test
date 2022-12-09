import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinallyComponent } from './user-finally.component';

describe('UserFinallyComponent', () => {
  let component: UserFinallyComponent;
  let fixture: ComponentFixture<UserFinallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFinallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFinallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

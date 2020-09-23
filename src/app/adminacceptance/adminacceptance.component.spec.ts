import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminacceptanceComponent } from './adminacceptance.component';

describe('AdminacceptanceComponent', () => {
  let component: AdminacceptanceComponent;
  let fixture: ComponentFixture<AdminacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedusersComponent } from './acceptedusers.component';

describe('AcceptedusersComponent', () => {
  let component: AcceptedusersComponent;
  let fixture: ComponentFixture<AcceptedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

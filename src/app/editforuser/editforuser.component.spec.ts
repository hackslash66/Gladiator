import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditforuserComponent } from './editforuser.component';

describe('EditforuserComponent', () => {
  let component: EditforuserComponent;
  let fixture: ComponentFixture<EditforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

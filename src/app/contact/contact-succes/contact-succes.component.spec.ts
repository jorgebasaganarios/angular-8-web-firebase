import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccesComponent } from './contact-succes.component';

describe('ContactSuccesComponent', () => {
  let component: ContactSuccesComponent;
  let fixture: ComponentFixture<ContactSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

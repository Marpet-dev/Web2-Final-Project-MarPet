import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAndSupportComponent } from './service-and-support.component';

describe('ServiceAndSupportComponent', () => {
  let component: ServiceAndSupportComponent;
  let fixture: ComponentFixture<ServiceAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAndSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

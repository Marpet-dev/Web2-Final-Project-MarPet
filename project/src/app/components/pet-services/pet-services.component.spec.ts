import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetServicesComponent } from './pet-services.component';

describe('PetServicesComponent', () => {
  let component: PetServicesComponent;
  let fixture: ComponentFixture<PetServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

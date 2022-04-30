import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discount50Component } from './discount50.component';

describe('Discount50Component', () => {
  let component: Discount50Component;
  let fixture: ComponentFixture<Discount50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Discount50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Discount50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

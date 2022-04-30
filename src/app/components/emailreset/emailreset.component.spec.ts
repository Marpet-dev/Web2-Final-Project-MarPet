import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailresetComponent } from './emailreset.component';

describe('EmailresetComponent', () => {
  let component: EmailresetComponent;
  let fixture: ComponentFixture<EmailresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

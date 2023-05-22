import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptFormsComponent } from './encrypt-forms.component';

describe('EncryptFormsComponent', () => {
  let component: EncryptFormsComponent;
  let fixture: ComponentFixture<EncryptFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncryptFormsComponent]
    });
    fixture = TestBed.createComponent(EncryptFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptPageComponent } from './encrypt-page.component';

describe('EncryptPageComponent', () => {
  let component: EncryptPageComponent;
  let fixture: ComponentFixture<EncryptPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncryptPageComponent]
    });
    fixture = TestBed.createComponent(EncryptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

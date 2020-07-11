import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdpAlertDialogComponent } from './ldp-alert-dialog.component';

describe('LdpAlertDialogComponent', () => {
  let component: LdpAlertDialogComponent;
  let fixture: ComponentFixture<LdpAlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdpAlertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdpAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

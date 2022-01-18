import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenConfirmDialogComponent } from './open-confirm-dialog.component';

describe('OpenConfirmDialogComponent', () => {
  let component: OpenConfirmDialogComponent;
  let fixture: ComponentFixture<OpenConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

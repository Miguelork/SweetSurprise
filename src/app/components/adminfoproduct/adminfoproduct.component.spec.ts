import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfoproductComponent } from './adminfoproduct.component';

describe('AdminfoproductComponent', () => {
  let component: AdminfoproductComponent;
  let fixture: ComponentFixture<AdminfoproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfoproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

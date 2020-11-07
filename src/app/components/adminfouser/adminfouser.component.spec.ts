import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfouserComponent } from './adminfouser.component';

describe('AdminfouserComponent', () => {
  let component: AdminfouserComponent;
  let fixture: ComponentFixture<AdminfouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

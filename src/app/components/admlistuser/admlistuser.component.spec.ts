import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmlistuserComponent } from './admlistuser.component';

describe('AdmlistuserComponent', () => {
  let component: AdmlistuserComponent;
  let fixture: ComponentFixture<AdmlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmlistuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

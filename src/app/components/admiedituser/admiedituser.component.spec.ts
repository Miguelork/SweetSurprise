import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiedituserComponent } from './admiedituser.component';

describe('AdmiedituserComponent', () => {
  let component: AdmiedituserComponent;
  let fixture: ComponentFixture<AdmiedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiedituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

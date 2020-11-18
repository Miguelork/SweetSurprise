import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmieditproductComponent } from './admieditproduct.component';

describe('AdmieditproductComponent', () => {
  let component: AdmieditproductComponent;
  let fixture: ComponentFixture<AdmieditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmieditproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmieditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

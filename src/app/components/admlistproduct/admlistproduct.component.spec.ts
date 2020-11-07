import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmlistproductComponent } from './admlistproduct.component';

describe('AdmlistproductComponent', () => {
  let component: AdmlistproductComponent;
  let fixture: ComponentFixture<AdmlistproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmlistproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmlistproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiopeComponent } from './admiope.component';

describe('AdmiopeComponent', () => {
  let component: AdmiopeComponent;
  let fixture: ComponentFixture<AdmiopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruseldetailComponent } from './carruseldetail.component';

describe('CarruseldetailComponent', () => {
  let component: CarruseldetailComponent;
  let fixture: ComponentFixture<CarruseldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruseldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruseldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

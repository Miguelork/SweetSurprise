import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbusqComponent } from './productbusq.component';

describe('ProductbusqComponent', () => {
  let component: ProductbusqComponent;
  let fixture: ComponentFixture<ProductbusqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbusqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbusqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocetarjetComponent } from './conocetarjet.component';

describe('ConocetarjetComponent', () => {
  let component: ConocetarjetComponent;
  let fixture: ComponentFixture<ConocetarjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocetarjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocetarjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilopeComponent } from './perfilope.component';

describe('PerfilopeComponent', () => {
  let component: PerfilopeComponent;
  let fixture: ComponentFixture<PerfilopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

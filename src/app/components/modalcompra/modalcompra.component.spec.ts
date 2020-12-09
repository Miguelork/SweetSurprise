import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcompraComponent } from './modalcompra.component';

describe('ModalcompraComponent', () => {
  let component: ModalcompraComponent;
  let fixture: ComponentFixture<ModalcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

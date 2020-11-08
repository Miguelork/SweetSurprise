import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildeseoComponent } from './perfildeseo.component';

describe('PerfildeseoComponent', () => {
  let component: PerfildeseoComponent;
  let fixture: ComponentFixture<PerfildeseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildeseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfildeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

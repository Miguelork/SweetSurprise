import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilformComponent } from './perfilform.component';

describe('PerfilformComponent', () => {
  let component: PerfilformComponent;
  let fixture: ComponentFixture<PerfilformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

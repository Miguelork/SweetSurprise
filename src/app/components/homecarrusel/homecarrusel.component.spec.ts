import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarruselComponent } from './homecarrusel.component';

describe('HomecarruselComponent', () => {
  let component: HomecarruselComponent;
  let fixture: ComponentFixture<HomecarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

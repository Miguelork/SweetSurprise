import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbolsaComponent } from './listbolsa.component';

describe('ListbolsaComponent', () => {
  let component: ListbolsaComponent;
  let fixture: ComponentFixture<ListbolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

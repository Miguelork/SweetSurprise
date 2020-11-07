import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcardproductComponent } from './listcardproduct.component';

describe('ListcardproductComponent', () => {
  let component: ListcardproductComponent;
  let fixture: ComponentFixture<ListcardproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcardproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcardproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

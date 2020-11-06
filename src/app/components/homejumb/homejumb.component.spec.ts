import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomejumbComponent } from './homejumb.component';

describe('HomejumbComponent', () => {
  let component: HomejumbComponent;
  let fixture: ComponentFixture<HomejumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomejumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomejumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

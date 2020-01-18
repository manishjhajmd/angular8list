import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticComponent } from './pratic.component';

describe('PraticComponent', () => {
  let component: PraticComponent;
  let fixture: ComponentFixture<PraticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectComponent } from './projectGenerator.component';

describe('PorjectComponent', () => {
  let component: PorjectComponent;
  let fixture: ComponentFixture<PorjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorjectComponent]
    });
    fixture = TestBed.createComponent(PorjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

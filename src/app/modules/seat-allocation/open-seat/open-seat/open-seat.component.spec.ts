import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSeatComponent } from './open-seat.component';

describe('OpenSeatComponent', () => {
  let component: OpenSeatComponent;
  let fixture: ComponentFixture<OpenSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

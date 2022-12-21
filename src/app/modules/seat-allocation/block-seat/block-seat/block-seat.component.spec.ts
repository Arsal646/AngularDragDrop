import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSeatComponent } from './block-seat.component';

describe('BlockSeatComponent', () => {
  let component: BlockSeatComponent;
  let fixture: ComponentFixture<BlockSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockSeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

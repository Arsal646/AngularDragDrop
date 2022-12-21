import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBlockListComponent } from './fixed-block-list.component';

describe('FixedBlockListComponent', () => {
  let component: FixedBlockListComponent;
  let fixture: ComponentFixture<FixedBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedBlockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

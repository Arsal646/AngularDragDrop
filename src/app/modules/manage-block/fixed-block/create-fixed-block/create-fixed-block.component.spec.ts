import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixedBlockComponent } from './create-fixed-block.component';

describe('CreateFixedBlockComponent', () => {
  let component: CreateFixedBlockComponent;
  let fixture: ComponentFixture<CreateFixedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFixedBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFixedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

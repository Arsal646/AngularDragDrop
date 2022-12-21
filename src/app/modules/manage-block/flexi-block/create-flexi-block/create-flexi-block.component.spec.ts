import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlexiBlockComponent } from './create-flexi-block.component';

describe('CreateFlexiBlockComponent', () => {
  let component: CreateFlexiBlockComponent;
  let fixture: ComponentFixture<CreateFlexiBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlexiBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFlexiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

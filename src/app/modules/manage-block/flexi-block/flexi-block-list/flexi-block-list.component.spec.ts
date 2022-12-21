import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexiBlockListComponent } from './flexi-block-list.component';

describe('FlexiBlockListComponent', () => {
  let component: FlexiBlockListComponent;
  let fixture: ComponentFixture<FlexiBlockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexiBlockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexiBlockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

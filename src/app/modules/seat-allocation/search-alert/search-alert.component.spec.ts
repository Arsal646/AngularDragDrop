import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlertComponent } from './search-alert.component';

describe('SearchAlertComponent', () => {
  let component: SearchAlertComponent;
  let fixture: ComponentFixture<SearchAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

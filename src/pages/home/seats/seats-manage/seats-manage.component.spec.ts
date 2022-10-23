import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsManageComponent } from './seats-manage.component';

describe('SeatsManageComponent', () => {
  let component: SeatsManageComponent;
  let fixture: ComponentFixture<SeatsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

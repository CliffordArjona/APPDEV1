import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymDetail } from './gym-detail';

describe('GymDetail', () => {
  let component: GymDetail;
  let fixture: ComponentFixture<GymDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taoteching } from './taoteching';

describe('Taoteching', () => {
  let component: Taoteching;
  let fixture: ComponentFixture<Taoteching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Taoteching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taoteching);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemon } from './all-pokemon';

describe('AllPokemon', () => {
  let component: AllPokemon;
  let fixture: ComponentFixture<AllPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Squadre } from './squadre';

describe('Squadre', () => {
  let component: Squadre;
  let fixture: ComponentFixture<Squadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Squadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Squadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partite } from './partite';

describe('Partite', () => {
  let component: Partite;
  let fixture: ComponentFixture<Partite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parametrizacao } from './parametrizacao';

describe('Parametrizacao', () => {
  let component: Parametrizacao;
  let fixture: ComponentFixture<Parametrizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Parametrizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parametrizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

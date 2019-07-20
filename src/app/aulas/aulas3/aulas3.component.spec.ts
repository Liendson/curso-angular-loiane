import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aulas3Component } from './aulas3.component';

describe('Aulas3Component', () => {
  let component: Aulas3Component;
  let fixture: ComponentFixture<Aulas3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aulas3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aulas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

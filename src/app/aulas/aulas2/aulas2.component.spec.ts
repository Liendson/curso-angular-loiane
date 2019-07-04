import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aulas2Component } from './aulas2.component';

describe('Aulas2Component', () => {
  let component: Aulas2Component;
  let fixture: ComponentFixture<Aulas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aulas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aulas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteaulaComponent } from './testeaula.component';

describe('TesteaulaComponent', () => {
  let component: TesteaulaComponent;
  let fixture: ComponentFixture<TesteaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

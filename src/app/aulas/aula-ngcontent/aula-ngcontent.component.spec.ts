import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaNgcontentComponent } from './aula-ngcontent.component';

describe('AulaNgcontentComponent', () => {
  let component: AulaNgcontentComponent;
  let fixture: ComponentFixture<AulaNgcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaNgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

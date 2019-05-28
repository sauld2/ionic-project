import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagandaPage } from './propaganda.page';

describe('PropagandaPage', () => {
  let component: PropagandaPage;
  let fixture: ComponentFixture<PropagandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropagandaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

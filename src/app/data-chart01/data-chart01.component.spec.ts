import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataChart01Component } from './data-chart01.component';

describe('DataChart01Component', () => {
  let component: DataChart01Component;
  let fixture: ComponentFixture<DataChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

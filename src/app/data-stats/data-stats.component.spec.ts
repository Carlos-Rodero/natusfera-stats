import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStatsComponent } from './data-stats.component';

describe('DataStatsComponent', () => {
  let component: DataStatsComponent;
  let fixture: ComponentFixture<DataStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

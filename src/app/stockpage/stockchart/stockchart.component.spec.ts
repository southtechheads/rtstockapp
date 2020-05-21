import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockchartComponent } from './stockchart.component';

describe('StockchartComponent', () => {
  let component: StockchartComponent;
  let fixture: ComponentFixture<StockchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

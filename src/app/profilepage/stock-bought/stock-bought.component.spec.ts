import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBoughtComponent } from './stock-bought.component';

describe('StockBoughtComponent', () => {
  let component: StockBoughtComponent;
  let fixture: ComponentFixture<StockBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

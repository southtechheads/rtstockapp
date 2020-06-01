import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBoughtItemsComponent } from './stock-bought-items.component';

describe('StockBoughtItemsComponent', () => {
  let component: StockBoughtItemsComponent;
  let fixture: ComponentFixture<StockBoughtItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBoughtItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBoughtItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

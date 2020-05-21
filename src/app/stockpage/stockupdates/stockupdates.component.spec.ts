import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockupdatesComponent } from './stockupdates.component';

describe('StockupdatesComponent', () => {
  let component: StockupdatesComponent;
  let fixture: ComponentFixture<StockupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

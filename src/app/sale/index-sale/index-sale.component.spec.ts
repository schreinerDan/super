import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSaleComponent } from './index-sale.component';

describe('IndexSaleComponent', () => {
  let component: IndexSaleComponent;
  let fixture: ComponentFixture<IndexSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSaleComponent]
    });
    fixture = TestBed.createComponent(IndexSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

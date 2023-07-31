import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductTypeComponent } from './index-product-type.component';

describe('IndexProductTypeComponent', () => {
  let component: IndexProductTypeComponent;
  let fixture: ComponentFixture<IndexProductTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexProductTypeComponent]
    });
    fixture = TestBed.createComponent(IndexProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

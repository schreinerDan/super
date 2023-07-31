import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProductComponent } from './index-product.component';

describe('IndexProductComponent', () => {
  let component: IndexProductComponent;
  let fixture: ComponentFixture<IndexProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexProductComponent]
    });
    fixture = TestBed.createComponent(IndexProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

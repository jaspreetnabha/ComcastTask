import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformDataComponent } from './transform-data.component';

describe('TransformDataComponent', () => {
  let component: TransformDataComponent;
  let fixture: ComponentFixture<TransformDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

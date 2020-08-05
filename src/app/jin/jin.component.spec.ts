import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinComponent } from './jin.component';

describe('JinComponent', () => {
  let component: JinComponent;
  let fixture: ComponentFixture<JinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

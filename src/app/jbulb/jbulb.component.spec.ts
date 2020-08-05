import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbulbComponent } from './jbulb.component';

describe('JbulbComponent', () => {
  let component: JbulbComponent;
  let fixture: ComponentFixture<JbulbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbulbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoutComponent } from './jout.component';

describe('JoutComponent', () => {
  let component: JoutComponent;
  let fixture: ComponentFixture<JoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

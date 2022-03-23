import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheadComponent } from './apphead.component';

describe('AppheadComponent', () => {
  let component: AppheadComponent;
  let fixture: ComponentFixture<AppheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

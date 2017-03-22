import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsDetailsComponent } from './resorts-details.component';

describe('ResortsDetailsComponent', () => {
  let component: ResortsDetailsComponent;
  let fixture: ComponentFixture<ResortsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

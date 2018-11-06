import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassholderComponent } from './passholder.component';

describe('PassholderComponent', () => {
  let component: PassholderComponent;
  let fixture: ComponentFixture<PassholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

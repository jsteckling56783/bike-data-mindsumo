import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesZoomedOutComponent } from './routes-zoomed-out.component';

describe('RoutesZoomedOutComponent', () => {
  let component: RoutesZoomedOutComponent;
  let fixture: ComponentFixture<RoutesZoomedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesZoomedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesZoomedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesZoomedInComponent } from './routes-zoomed-in.component';

describe('RoutesZoomedInComponent', () => {
  let component: RoutesZoomedInComponent;
  let fixture: ComponentFixture<RoutesZoomedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesZoomedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesZoomedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

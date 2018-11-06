import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsZoomedOutComponent } from './locations-zoomed-out.component';

describe('LocationsZoomedOutComponent', () => {
  let component: LocationsZoomedOutComponent;
  let fixture: ComponentFixture<LocationsZoomedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsZoomedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsZoomedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

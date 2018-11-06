import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGifComponent } from './time-gif.component';

describe('TimeGifComponent', () => {
  let component: TimeGifComponent;
  let fixture: ComponentFixture<TimeGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidescrollComponent } from './sidescroll.component';

describe('SidescrollComponent', () => {
  let component: SidescrollComponent;
  let fixture: ComponentFixture<SidescrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidescrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

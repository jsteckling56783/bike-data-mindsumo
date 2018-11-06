import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetMovesComponent } from './net-moves.component';

describe('NetMovesComponent', () => {
  let component: NetMovesComponent;
  let fixture: ComponentFixture<NetMovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetMovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

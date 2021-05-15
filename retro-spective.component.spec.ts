import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSpectiveComponent } from './retro-spective.component';

describe('RetroSpectiveComponent', () => {
  let component: RetroSpectiveComponent;
  let fixture: ComponentFixture<RetroSpectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroSpectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroSpectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

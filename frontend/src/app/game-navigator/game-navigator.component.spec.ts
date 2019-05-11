import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNavigatorComponent } from './game-navigator.component';

describe('GameNavigatorComponent', () => {
  let component: GameNavigatorComponent;
  let fixture: ComponentFixture<GameNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

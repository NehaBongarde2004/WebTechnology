import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDemoComponent } from './directives-demo';

describe('DirectivesDemo', () => {
  let component: DirectivesDemoComponent;
  let fixture: ComponentFixture<DirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

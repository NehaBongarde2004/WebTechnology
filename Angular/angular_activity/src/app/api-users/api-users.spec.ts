import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsersComponent } from './api-users';

describe('ApiUsers', () => {
  let component: ApiUsersComponent;
  let fixture: ComponentFixture<ApiUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiUsersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

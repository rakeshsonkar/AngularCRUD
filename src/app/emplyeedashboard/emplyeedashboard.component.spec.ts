import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeedashboardComponent } from './emplyeedashboard.component';

describe('EmplyeedashboardComponent', () => {
  let component: EmplyeedashboardComponent;
  let fixture: ComponentFixture<EmplyeedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

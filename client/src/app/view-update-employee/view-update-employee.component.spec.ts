import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateEmployeeComponent } from './view-update-employee.component';

describe('ViewUpdateEmployeeComponent', () => {
  let component: ViewUpdateEmployeeComponent;
  let fixture: ComponentFixture<ViewUpdateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUpdateEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

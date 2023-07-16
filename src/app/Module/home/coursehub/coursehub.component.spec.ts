import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursehubComponent } from './coursehub.component';

describe('CoursehubComponent', () => {
  let component: CoursehubComponent;
  let fixture: ComponentFixture<CoursehubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursehubComponent]
    });
    fixture = TestBed.createComponent(CoursehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

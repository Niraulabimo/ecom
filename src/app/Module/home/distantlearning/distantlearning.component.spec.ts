import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistantlearningComponent } from './distantlearning.component';

describe('DistantlearningComponent', () => {
  let component: DistantlearningComponent;
  let fixture: ComponentFixture<DistantlearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistantlearningComponent]
    });
    fixture = TestBed.createComponent(DistantlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

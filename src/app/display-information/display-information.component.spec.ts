import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInformationComponent } from './display-information.component';

describe('DisplayInformationComponent', () => {
  let component: DisplayInformationComponent;
  let fixture: ComponentFixture<DisplayInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayInformationComponent]
    });
    fixture = TestBed.createComponent(DisplayInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

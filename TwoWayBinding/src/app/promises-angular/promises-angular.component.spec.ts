import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesAngularComponent } from './promises-angular.component';

describe('PromisesAngularComponent', () => {
  let component: PromisesAngularComponent;
  let fixture: ComponentFixture<PromisesAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

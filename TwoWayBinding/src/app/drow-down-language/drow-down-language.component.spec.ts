import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrowDownLanguageComponent } from './drow-down-language.component';

describe('DrowDownLanguageComponent', () => {
  let component: DrowDownLanguageComponent;
  let fixture: ComponentFixture<DrowDownLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrowDownLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrowDownLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

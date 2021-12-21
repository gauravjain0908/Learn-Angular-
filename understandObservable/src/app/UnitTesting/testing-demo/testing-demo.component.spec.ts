import { UnitTestingService } from './../unit-testing.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingDemoComponent } from './testing-demo.component';

describe('TestingDemoComponent', () => {
  let component: TestingDemoComponent;
  let fixture: ComponentFixture<TestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () =>{
    let fixture = TestBed.createComponent(TestingDemoComponent);
    let app = fixture.debugElement.componentInstance;
    let unitTestingService = fixture.debugElement.injector.get(UnitTestingService);
    fixture.detectChanges();
    expect(unitTestingService.myUser.name).toEqual(app.user.name)
  })

  it('should \nt display the user name if user is Testing ', ()=>{
    let fixture = TestBed.createComponent(TestingDemoComponent);
    let app = fixture.debugElement.componentInstance;
    // app.isTesting = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain
    (app.user.name);

  })
});

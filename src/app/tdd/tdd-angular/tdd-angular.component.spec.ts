import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddAngularComponent } from './tdd-angular.component';

describe('TddAngularComponent', () => {
  let component: TddAngularComponent;
  let fixture: ComponentFixture<TddAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TddAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TddAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the value test', () => {
    fixture.detectChanges();

    let p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('hello');

    component.myMethod()

    fixture.detectChanges();
    expect(p.textContent).toContain('world');
  })

  it('should display the username in paragraph', () => {
    const element:HTMLElement = fixture.nativeElement;
    let p = element.querySelector('p');
    expect(p.innerText).toContain('Rafaella');
  })
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TddAngularService } from './tdd/tdd-angular.service';
import { TddAngularComponent } from './tdd/tdd-angular/tdd-angular.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TddAngularComponent,
        TddAngularService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });



 
});

import { inject, TestBed } from '@angular/core/testing';

import { TddAngularService } from './tdd-angular.service';

describe('TddAngularService', () => {
  let service: TddAngularService;

  beforeEach(() => {
   service = new TddAngularService;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUsername should be return Rafaella Menezes', () => {
    expect(service.getUsername()).toBe('Rafaella Menezes');
  });

  // asyncronous version
  // it('#getUsername_p should be return Rafaella Menezes', (done: DoneFn) => {
  //   service.getUsername_p().then( nameValue => {
  //   expect(nameValue).toBe('Rafaella Menezes');
  //   done();
  //   })
  // });

  it('#getUsername_o should be return Rafaella Menezes', (done: DoneFn) => {
    service.getUsername_o().subscribe( nameValue => {
    expect(nameValue).toBe('Rafaella Menezes');
    done();
    })
  });

  describe('TDDService using TestBed', ()=> {
    beforeEach(()=>{
      TestBed.configureTestingModule({
        providers:[TddAngularService]
      })
    })

    it('#getUsername should return Rafaella Menezes', inject([TddAngularService], (service: TddAngularService)=>{
      expect(service.getUsername()).toBe('Rafaella Menezes')
    }))
  })

});

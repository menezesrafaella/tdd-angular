import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TddAngularService {

  user = {
    first: "Rafaella",
    last: "Menezes",
    roles: [
      'admin', 'editor'
     ]
  }

  constructor() { }

  getUsername():string {
    return `${this.user.first} ${this.user.last}`
  }

  // getUsername_p():Promise<string | void>{
  //   return new Promise<string>( (resolve,reject)=>{
  //     setTimeout(()=> {
  //       resolve(`${this.user.first} ${this.user.last}`)}, 2000)
  //     }).catch( err => {
  //       reject(`${err}`)
  //     })
  // }

  getUsername_o():Observable<string>{
    return Observable.create( observer => {
      setTimeout (() => {
        observer.next( `${this.user.first} ${this.user.last}` )
        observer.complete()
      }, 2000)
    })
  }

}



import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  getCurrentUser(): any {
    // TODO: Enable after implementation
    // return JSON.parse(this.localStorage.getItem('currentUser'));
    return {
        token: 'aisdnaksjdn,axmnczm',
        isAdmin: true,
        email: 'john.doe@gmail.com',
        id: '12312323232',
        alias: 'john.doe@gmail.com'.split('@')[0],
        expiration: moment().add(1, 'days').toDate(),
        fullName: 'John Doe'
    };
}
}

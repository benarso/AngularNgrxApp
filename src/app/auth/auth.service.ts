import { Injectable } from '@angular/core';
import { StoreModule, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private MOCKUSER: User = {
    user: {
      username: 'Ben',
      email: 'user@email.com'
    }
  };


  constructor() { }

  authenticate(username: string, password: string): Observable<User> {
    return of(this.MOCKUSER);
  }
}

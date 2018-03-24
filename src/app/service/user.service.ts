import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(credentials) {
    return this.http.get('api/user/' + credentials);
  }

  public createUser(user: User) {
    return this.http.post('api/user', user);
  }

  public updateUser(user: User) {
    return this.http.put('api/user/' + user.id, user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = "http://localhost:5000/users";
  usersData: IUser[] = [];
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return new Promise(resolve => {
      let userData = this.httpClient.get<IUser[]>(this.baseURL);
      console.log(userData);
    })
  }


  async login(userObject: IUser) {

    let result = this.getUsers().then((data) => {
      return data;
    })

    console.log(result, "[USERS DATA]")
  }
}

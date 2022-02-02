import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = "http://localhost:5000/users";
  // usersData: IUser[] = [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      // let randInt = Math.random() * 10;

      // if(randInt > 8) {
      //   reject({ status: 400, message: "Something Went Wrong"});
      // }

      this.httpClient.get<IUser[]>(this.baseURL).subscribe((data) => {
        resolve(data);
      })
    })
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(userEmail: string) {
    let accessToken = `unique-access-${userEmail}-token`;
    localStorage.setItem("token", accessToken);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  async login(userObject: IUser) {
    let usersData: any = await this.getUsers();

    let existingUser = usersData.filter((userItem: IUser) => userItem.email === userObject.email)[0];

    if (!existingUser) {
      return { status: 404, message: "User with this Email Not Found" };
    }

    if (existingUser.password === userObject.password) {
      this.setToken(existingUser.email);
      return { status: 200, message: "Authenticated Successfully" };
    } else {
      return { status: 400, message: "Incorrect Email or Password" };
    }
  }
}

import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  login(name: string, password: string): Observable<any> {
    // console.log(name);
    // console.log(password);
    this.isUserLoggedIn = name == 'admin' && password == '12345';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("Is User Authentication is successful: " + val);
      })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
  constructor() { }
}

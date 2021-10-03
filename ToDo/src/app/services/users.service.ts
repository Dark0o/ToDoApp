import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [];

  constructor(private http: HttpClient) {}

  getSignedUpUsers(): Observable<any> {
    return this.http
      .get(
        'https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((data) => {
          console.log(data);
          for (const key in data) {
            this.users.push({ ...data[key], id: key });
          }
          console.log(this.users);

          return this.users;
        })
      );
  }

  addUser(user): Observable<any> {
    if (this.users.length > 0) {
      if (this.userExists(user.username, user.password)) {
        alert('User already exists, please Log In');
        return;
      }
    }
    return this.http.post(
      'https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      user
    );
  }

  userExists(username: string, password: string) {
    let existingUser = this.users.filter(
      (u) => u.username === username && u.password === password
    );
    if (existingUser.length === 1) {
      return true;
    }
    return false;
  }
}

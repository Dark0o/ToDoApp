import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UsersService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userService.getSignedUpUsers().subscribe();
  }

  onLogIn(username: string, password: string) {
    this.authService.login(username, password);
  }

  onSignUp(username: string, password: string) {
    if (username === '' || password === '') {
      alert('Please enter e-mail and password');
      return;
    }
    this.userService.addUser({ username, password }).subscribe();
    this.userService.users.push({ username, password });
  }
}

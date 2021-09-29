import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username;
  password;
  

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
this.userService.getSignedUpUsers().subscribe();
  }

  onLogIn(username, password){

  }

  onSignUp(username, password){
    this.userService.addUser({username: username, password: password}).subscribe(data =>{
      console.log(data);
    })
  }
}

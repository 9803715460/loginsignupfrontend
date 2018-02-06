import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { LogindataService } from '../logindata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logindataservice: LogindataService) { } 
  users: Users[];

  ngOnInit() {
    this.getUsers();
    
  }
  getUsers() {
    this.logindataservice.getUserData()
    .subscribe(users=> {
      this.users = users;
    });
  }

}

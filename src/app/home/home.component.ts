import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { Router, ActivatedRoute } from '@angular/router';
import { LogindataService } from '../logindata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logindataservice: LogindataService,public router: Router) { } 
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
  editUser(item){
    this.logindataservice.setItem(item);
    this.router.navigate(["edituser"])
  }

}

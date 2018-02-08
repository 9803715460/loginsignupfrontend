import { Component, OnInit } from '@angular/core';
import { LogindataService } from '../logindata.service';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  item: any;
  userForm: FormGroup;
  formSubmitted = false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private loginservice: LogindataService,public router: Router) { }

  
  ngOnInit() {
    this.item = this.loginservice.getItem();
    this.userForm = new FormGroup({
      Firstname: new FormControl(this.item.Firstname, [Validators.required, Validators.maxLength(10)]),
      Lastname: new FormControl(this.item.Lastname, [Validators.required, Validators.maxLength(10)]),
      UserName: new FormControl(this.item.UserName, [Validators.required, Validators.maxLength(10)]),
      email: new FormControl(this.item.email,[Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl(this.item.password, [Validators.required, Validators.minLength(8)]),
      age: new FormControl(this.item.age),
      gender: new FormControl(this.item.gender), 
  });
  }
  onFormSubmit(): void {
    this.loginservice.editdata(this.userForm.value).subscribe(
      
    );
   this.formSubmitted = true;
   this.router.navigate(["showusers"])

}
}

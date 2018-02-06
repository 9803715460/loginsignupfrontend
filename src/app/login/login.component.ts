import { Component, OnInit } from '@angular/core';
import { LogindataService } from '../logindata.service';
import { AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private logindataservice: LogindataService) { }

  formSubmitted = false;
  userForm: FormGroup;
  ngOnInit() {
    this.userForm = new FormGroup({
      UserName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    

    });
    
  }
  onFormSubmit(): void {
    this.logindataservice.logindata(this.userForm.value).subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {

      }
    );
    this.formSubmitted = true;

  }
}

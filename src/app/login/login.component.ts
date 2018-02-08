import { Component, OnInit } from '@angular/core';
import { LogindataService } from '../logindata.service';
import { AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private logindataservice: LogindataService,public router: Router) { }

  formSubmitted = false;
  userForm: FormGroup;
  message:string;
  token :string;
  ngOnInit() {
    this.userForm = new FormGroup({
      UserName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      // Token:  new FormControl('')

    });
    
  }
  onFormSubmit(): void {
    this.logindataservice.logindata(this.userForm.value).subscribe(
      (success) => {
       this.logindataservice.create("token", success.token);
        // this.userForm.patchValue({Token: token});

        // console.log(this.userForm.value);
        this.router.navigate(["showusers"])
      },
      (error) => {
        console.log(error);
        this.message="Login Unsucessfull"
        this.resetForm();
      
      }
    );
    this.formSubmitted = true;
    
    

  }
  resetForm() { 
    this.userForm.reset();
  }
}

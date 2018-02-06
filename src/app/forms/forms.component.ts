import {  OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import { LogindataService } from '../logindata.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private logindataservice:LogindataService) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  formSubmitted = false;
  userForm: FormGroup;
  ngOnInit() {
    this.userForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      Lastname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      UserName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl('20'),
      gender: new FormControl('male'), 
  });
  } 
onFormSubmit(): void {
    this.logindataservice.adddata(this.userForm.value).subscribe();
   this.formSubmitted = true;

}
}

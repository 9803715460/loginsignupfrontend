import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LogindataService } from '../app/logindata.service';


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private cookieService: LogindataService) {}

  canActivate() {
    const token = this.cookieService.read('token');
    if (token) {
     
      this.router.navigate(["showusers"])
      return false;
    } else {
      return true;
    }
  }
}

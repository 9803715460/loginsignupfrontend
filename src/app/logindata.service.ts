import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './models/users';
import * as crypto from 'crypto-js';
import { environment } from '../environments/environment.prod';


@Injectable()
export class LogindataService {
    item: any;
    private apiURL = "http://localhost:8080";
    protected headers:any;
    token: string;
    

    constructor(private http: HttpClient) { }


    adddata(value): any {
       
        return this.http.post(this.apiURL + "/signup", value);
    }
    logindata(values): any {
        
         return this.http.post(this.apiURL + "/login", values);
     }
     getUserData(): Observable<Users[]> {
        return this.http.get<Users[]>(this.apiURL + "/showusers");
        
        
    }
    editdata(value): any {
       
        return this.http.post(this.apiURL + "/edituser", value,this.getHeaders());
        
      
    }
    setItem(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }


    create(name: string, value: string, days: number = 1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        value = this.encrypt(value);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = name + '=' + value + expires + '; path=/';
      }

    read(name: string) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c ? this.decrypt(c.substring(nameEQ.length, c.length)) : null;
          }
        }
        return null;
      }
      protected getHeaders() {
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
        const token = this.read('token');
        if (token) {
          this.headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', `JWT ${token}`);
        }
        return { headers: this.headers };
      }
      decrypt(text) {
        try {
          const bytes = crypto.AES.decrypt(text.toString(), environment.SECRET);
          return bytes.toString(crypto.enc.Utf8);
        } catch (err) {
          return err;
        }
      }
      encrypt(text) {
        return crypto.AES.encrypt(text, environment.SECRET);
      }
    }

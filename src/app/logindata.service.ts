import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './models/users';


@Injectable()
export class LogindataService {

    private apiURL = "http://localhost:8080";

    constructor(private http: HttpClient) { }


    adddata(value): any {
       console.log(value)
        return this.http.post(this.apiURL + "/signup", value);
    }
    logindata(values): any {
        console.log(values)
         return this.http.post(this.apiURL + "/login", values);
     }
     getUserData(): Observable<Users[]> {
        return this.http.get<Users[]>(this.apiURL + "/showusers");
        
    }
}
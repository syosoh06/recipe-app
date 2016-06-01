import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { contentHeaders } from './headers';

export function isLoggedIn(){
    return !!localStorage.getItem('jwt');
}

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http){
        this.loggedIn=false;
    }

    logout() {
        localStorage.removeItem('jwt');
        this.loggedIn = false;
    }

    setLoggedIn(value){
        this.loggedIn = value;
    }

    getLoggedIn(){
        return this.loggedIn;
    }

    login(username, password) {

        let body = JSON.stringify({ username, password });
        return this.http.post('http://localhost:3331/sessions/create', body, { headers: contentHeaders })
            .map(function(res){
                return res.json();
            })
            .map(function(res){
                if(res.id_token){
                    localStorage.setItem('jwt', res.id_token);
                    this.loggedIn = true;
                }
                return res.id_token;
            });
    }

    signup(username, password) {

        let body = JSON.stringify({ username, password });
        return this.http.post('http://localhost:3331/users', body, { headers: contentHeaders })
            .map(function(res){
                return res.json();
            })
            .map(function(res){
                if(res.id_token){
                    localStorage.setItem('jwt', res.id_token);
                    this.loggedIn = true;
                }
                return res.id_token;
            });
    }
}


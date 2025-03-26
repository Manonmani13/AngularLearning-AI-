import { Component, Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class WelcomeService {

    constructor(){

    }
    msg:string="";
     getWelcomeMsg():string{
        this.msg="Welcome to Ashok IT";
        return this.msg;
    }
 
}

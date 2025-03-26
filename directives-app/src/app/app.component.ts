import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgClass } from '@angular/common';
import { IfElseAppComponent } from "./if-else-app/if-else-app.component";
import { NgForExampleComponent } from "./ng-for-example/ng-for-example.component";
import { WelcomeService } from './welcomeservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass, IfElseAppComponent, NgForExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mark:number=70;
  mycolor:string="";
  myclass:string="";
  welcomeMsg:string="";
  constructor(@Inject(WelcomeService)private s:WelcomeService){

    // if(this.mark>=35){
    //   this.myclass="class2";
    // }
    // else{
    //   this.myclass="class1";
    // }
  }
  getMsg(){
    this.welcomeMsg=this.s.getWelcomeMsg(); 
  }
}

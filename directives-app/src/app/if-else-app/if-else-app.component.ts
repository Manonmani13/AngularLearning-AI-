import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-app',
  imports: [NgIf,NgTemplateOutlet],
  templateUrl: './if-else-app.component.html',
  styleUrl: './if-else-app.component.css'
})
export class IfElseAppComponent {
  mark:number=70;
  status:boolean=false;
  constructor(){
    if(this.mark>=50){
      this.status=true;
    }
    else{
      this.status=false;
    }
  }
}

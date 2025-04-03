import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'singal-example';
  firstName = signal('Morgan');
  constructor(){
    console.log(this.firstName());
    this.firstName.set('Jaime');
    
    this.firstName.update(name => name.toUpperCase()); 
    const firstCaptiallize=computed(()=>this.firstName().toUpperCase());
    console.log("upper "+firstCaptiallize())
  }

}

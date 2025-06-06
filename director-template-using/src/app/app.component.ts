import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`<h1>Hello<h1>
  <p>Sample Application<p>`,
  styles:`h1 { font-size: 3em; color: yellow} `
})
export class AppComponent {
  title = 'director-template-using';
}

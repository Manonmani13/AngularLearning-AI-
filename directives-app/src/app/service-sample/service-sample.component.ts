import { Component } from '@angular/core';
import { WelcomeService } from '../welcomeservice';

@Component({
  selector: 'app-service-sample',
  imports: [],
  templateUrl: './service-sample.component.html',
  styleUrl: './service-sample.component.css',
  providers:[WelcomeService]
})
export class ServiceSampleComponent {

}

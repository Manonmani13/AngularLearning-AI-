import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username:string="";
  password:string="";
  confirmpassword:string="";
  gender:string="";
  selectedCountry:string="";
  countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IN', name: 'India' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
  ];
  Save():void{
    if(this.password!=this.confirmpassword){
      alert('PAssword and Confirm Password do not match')
    }
    const formData = {
      username: this.username,
      password: this.password,
      confirmpassword:this.confirmpassword,
      gender: this.gender,
      selectedCountry: this.selectedCountry
    };
    console.log('Form Data:', formData);

    // Optionally: Show success message or navigate to another page
    alert('Form saved successfully');
  }
}


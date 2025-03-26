import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  imports: [NgFor],
  templateUrl: './ng-for-example.component.html',
  styleUrl: './ng-for-example.component.css'
})
export class NgForExampleComponent implements OnInit{

  cities:string[]=['Hyd','Chennai','Banglore','Delhi','Pune'];
  constructor(){

  }

  ngOnInit(): void {
      
  }

}

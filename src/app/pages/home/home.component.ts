import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'TinyTowns';
  material: any;
  constructor() {}

  ngOnInit(): void { }

  onclick(val) {
   this.material = ''
    
  }
  getRandomMaterial(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
  }
  lanzardados() { 
    this.material = this.getRandomMaterial(1, 6);
  }
}

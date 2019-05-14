import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

rutas = [
  {
    path: '/home',
    nombre: 'Home'
  },
  {
    path: '/about',
    nombre: 'About'
  },
  {
    path: '/contact',
    nombre: 'Contact'
  },
  {
    path: '/posts',
    nombre: 'Posts'
  }
];
  constructor() { }

  ngOnInit() {
  }

}

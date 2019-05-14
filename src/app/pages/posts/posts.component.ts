import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


posts = [
  {
    title: 'Title1',
    body: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Thing',
    body: 'text'
  },
  {
    title: 'yo dude',
    body: 'post 3'
  }
];

  constructor(private dataServ: DataService) { }

  ngOnInit() {
    this.dataServ.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

postsRemote: any;

  constructor(private dataServ: DataService) { }

  ngOnInit() {
    this.postsRemote = this.dataServ.getPosts();
  }

  onClickParent(id) {
    console.log(id);
  }

}

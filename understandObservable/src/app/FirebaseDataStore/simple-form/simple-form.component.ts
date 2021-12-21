import { PostsService } from './../posts.service';
import { Post } from './../post.model';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = 'null';
  constructor(private http: HttpClient, private postService: PostsService) { }

  ngOnInit(): void {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts =>{
      this.isFetching=false;
      this.loadedPosts = posts
    }, error =>{
      this.error = error.message;
    });
  }

  onCreatePost(postData:Post) {
    // Send Http request

    this.postService.createAndStorePost(postData.title,
      postData.content);
  };

  onFetchPosts() {
    // Send Http request
     this.isFetching = true;
     this.postService.fetchPosts().subscribe(posts =>{
     this.isFetching=false;
     this.loadedPosts = posts
   }, error =>{

    this.error = error.message;
   })
  }

  onClearPosts() {

    // Send Http request
    this.postService.deletePosts().subscribe(()=>{
    this.loadedPosts = [];
  })
  }
}

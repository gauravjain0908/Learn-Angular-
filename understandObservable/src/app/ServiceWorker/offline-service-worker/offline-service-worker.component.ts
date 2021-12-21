import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './service.model';

@Component({
  selector: 'app-offline-service-worker',
  templateUrl: './offline-service-worker.component.html',
  styleUrls: ['./offline-service-worker.component.css']
})
export class OfflineServiceWorkerComponent implements OnInit {

  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }

}

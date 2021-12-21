import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-post',
  templateUrl: './service-post.component.html',
  styleUrls: ['./service-post.component.css']
})
export class ServicePostComponent implements OnInit {

  @Input() title!: string;
  @Input() content!: string;
  constructor() { }

  ngOnInit(): void {
  }


}

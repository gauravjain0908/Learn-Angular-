import { ServiceEventService } from './../../Shared/service-event.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit {

  event!: any[];
  constructor(private eventService:ServiceEventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvents();
  }

}

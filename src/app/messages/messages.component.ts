import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // le binding sur angular ne se fait que sur les composant public
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

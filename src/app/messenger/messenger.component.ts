import { Component, OnInit } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-database';

interface Message {
  text: string;
  sender: string;
  timestamp: Date;
}

@Component({
  selector: 'ns-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  currentUser: string = 'User1'; // This should be replaced with actual user authentication

  constructor() {}

  ngOnInit() {
    this.listenToMessages();
  }

  listenToMessages() {
    firebase().database().ref('/messages').on('value', (snapshot) => {
      const messagesObj = snapshot.val();
      this.messages = messagesObj ? Object.values(messagesObj) : [];
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const message: Message = {
        text: this.newMessage,
        sender: this.currentUser,
        timestamp: new Date()
      };
      firebase().database().ref('/messages').push(message);
      this.newMessage = '';
    }
  }
}
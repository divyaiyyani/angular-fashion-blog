import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact(1, '', '', '','');
  constructor() { }

  ngOnInit() {
  }
  get currentContact() { return JSON.stringify(this.model); }
}

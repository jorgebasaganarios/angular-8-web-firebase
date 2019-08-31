import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from '../models/contact';
import { DocumentReference } from '@angular/fire/firestore';
import { ContactService } from '../services/contact.service';
import { ContactViewModel } from '../models/contact-view-model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  createMode: boolean = true;
  contact: ContactViewModel;

  constructor(private formBuilder: FormBuilder,
              public activeModal: NgbActiveModal,
              public router: Router,
              private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    mensaje: ['', Validators.required]
    });

    /*if (!this.createMode) {
      this.loadContact(this.contact);
    }*/
  }

  /*loadContact(contact) {
    this.contactForm.patchValue(contact);
  }*/

  saveContact() {
    if (this.contactForm.invalid) {
      return;
     }

    if (this.createMode) {
      let contact: Contact = this.contactForm.value;
      contact.lastModifiedDate = new Date();
      contact.createDate = new Date();
      this.contactService.saveContact(contact)
      // .then(response => this.handleSuccessfulSaveContact(response, contact))
      .then(response => this.router.navigate(['contact-succes'])
      .catch(err => console.error(err)));
    } /*else {
      let contact: ContactViewModel = this.contactForm.value;
      contact.id = this.contact.id;
      contact.lastModifiedDate = new Date();
      this.contactService.editContact(contact)
        .then(() => this.handleSuccessfulEditContact(contact))
        .catch(err => console.error(err));
    }*/
  }

  handleSuccessfulSaveContact(response: DocumentReference, contact: Contact) {
    this.activeModal.dismiss({ contact: contact, id: response.id, createMode: true });
    // alert('Mensaje enviado con éxito, gracias!');
  }

  /*handleSuccessfulEditContact(contact: ContactViewModel) {
    this.activeModal.dismiss({ contact: contact, id: contact.id, createMode: false });
  }*/

}

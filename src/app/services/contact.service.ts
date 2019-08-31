import { Injectable } from '@angular/core';
import { Contact } from './../models/contact';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactViewModel } from '../models/contact-view-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db: AngularFirestore) { }

  private contactoCollectionName = 'contacto';

  getContact(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Contact>(this.contactoCollectionName, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
  }
  saveContact(contact: Contact): Promise<DocumentReference> {
    return this.db.collection(this.contactoCollectionName).add(contact);
  }
  /*editContact(contact: ContactViewModel): Promise<void> {
    return this.db.collection(this.contactoCollectionName).doc(contact.id).update(contact);
  }*/

  // tslint:disable-next-line: ban-types
  /*editContactPartial(id: string, obj: Object): Promise<void> {
    return this.db.collection(this.contactoCollectionName).doc(id).update(obj);
  }*/
  /*deleteContact(idContact: string): Promise<void> {
    return this.db.collection(this.contactoCollectionName).doc(idContact).delete();
  }*/
}

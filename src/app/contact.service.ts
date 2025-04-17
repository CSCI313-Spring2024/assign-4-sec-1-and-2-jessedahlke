import { Injectable } from '@angular/core';
import { CONTACTS } from './models/contact';
import { ContactClass } from './contact-format'

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor() { }

  contacts = CONTACTS;

  fNameCurrent: string = '';
  lNameCurrent: string = '';
  phoneNumCurrent: string = '';

  getContact(fNameTemp: string, lNameTemp: string, phoneNumTemp: string) {
    this.fNameCurrent = fNameTemp;
    this.lNameCurrent = lNameTemp;
    this.phoneNumCurrent = phoneNumTemp;
  }

  editContact(fNameTemp: string, lNameTemp: string, phoneNumTemp: string) {
    const i = this.contacts.findIndex((c: ContactClass) => c.phoneNumber == this.phoneNumCurrent)
    this.contacts[i].fName = fNameTemp;
    this.contacts[i].lName = lNameTemp;
    this.contacts[i].phoneNumber = phoneNumTemp;
  }

  updateContact(fNameTemp: string, lNameTemp: string, phoneNumTemp: string) {
    if (fNameTemp.trim() != '' && lNameTemp.trim() != '' && phoneNumTemp.trim() != '') {
      this.contacts.push({
        fName: fNameTemp,
        lName: lNameTemp,
        phoneNumber: phoneNumTemp,
      })
    }
  }

  deleteContact(phoneNumTemp: string) {
    const i = this.contacts.findIndex((c: ContactClass) => c.phoneNumber == phoneNumTemp);
    if (i > -1) {
      this.contacts.splice(i, 1);
    }
  }
}

import { Component, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  imports: [RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  listCompService = inject(ContactService);
}



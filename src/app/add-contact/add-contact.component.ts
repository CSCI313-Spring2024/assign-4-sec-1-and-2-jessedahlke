import { Component, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})

export class AddContactComponent {
  addCompService = inject(ContactService);
}

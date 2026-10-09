
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  message = '';
  confirmation = '';

  sendMessage(): void {
    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.message.trim()
    ) {
      this.confirmation = 'Please fill in all fields.';
      return;
    }

    this.confirmation =
      `Thank you, ${this.name.trim()}! Your message has been received.`;

    this.name = '';
    this.email = '';
    this.message = '';
  }
}

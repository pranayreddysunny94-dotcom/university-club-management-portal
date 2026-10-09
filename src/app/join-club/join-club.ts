
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-club',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join-club.html',
  styleUrl: './join-club.css'
})
export class JoinClub {
  student = {
    name: '',
    rollNumber: '',
    department: '',
    year: '',
    club: ''
  };

  message = '';

  register(): void {
    if (
      !this.student.name.trim() ||
      !this.student.rollNumber.trim() ||
      !this.student.department ||
      !this.student.year ||
      !this.student.club
    ) {
      this.message = 'Please fill in all fields.';
      return;
    }

    this.message =
      `Thank you, ${this.student.name.trim()}! ` +
      `Your interest in the ${this.student.club} has been registered.`;

    this.student = {
      name: '',
      rollNumber: '',
      department: '',
      year: '',
      club: ''
    };
  }
}

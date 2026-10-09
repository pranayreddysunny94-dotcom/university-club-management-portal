
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  events = [
    {
      name: 'Coding Competition',
      date: '20 November 2026',
      venue: 'Computer Lab',
      description: 'Test your programming and problem-solving skills.'
    },
    {
      name: 'Cultural Fest',
      date: '25 November 2026',
      venue: 'University Auditorium',
      description: 'Enjoy music, dance, drama, and student performances.'
    },
    {
      name: 'Sports Meet',
      date: '5 December 2026',
      venue: 'University Sports Ground',
      description: 'Participate in exciting indoor and outdoor sports.'
    }
  ];
}

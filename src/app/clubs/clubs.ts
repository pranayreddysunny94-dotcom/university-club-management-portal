
import { Component } from '@angular/core';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [],
  templateUrl: './clubs.html',
  styleUrl: './clubs.css'
})
export class Clubs {
  clubs = [
    {
      name: 'Coding Club',
      description: 'Improve programming skills and participate in coding competitions.',
      coordinator: 'Computer Science Department'
    },
    {
      name: 'Sports Club',
      description: 'Participate in sports activities and university tournaments.',
      coordinator: 'Sports Department'
    },
    {
      name: 'Cultural Club',
      description: 'Explore music, dance, drama, and cultural activities.',
      coordinator: 'Cultural Committee'
    },
    {
      name: 'Photography Club',
      description: 'Learn photography and capture memorable campus events.',
      coordinator: 'Student Activities Team'
    }
  ];
}


import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Clubs } from './clubs/clubs';
import { Events } from './events/events';
import { JoinClub } from './join-club/join-club';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'clubs', component: Clubs },
  { path: 'events', component: Events },
  { path: 'join-club', component: JoinClub },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

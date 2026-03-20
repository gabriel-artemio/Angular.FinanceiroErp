import { Component } from '@angular/core';
import { Auth } from '../core/services/auth';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private auth: Auth) {}
  
  logout() {
    this.auth.logout();
  }
}

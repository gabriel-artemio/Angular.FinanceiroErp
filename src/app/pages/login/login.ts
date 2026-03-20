import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  login() {

    const success = this.auth.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Usuário ou senha inválidos';
    }

  }

}
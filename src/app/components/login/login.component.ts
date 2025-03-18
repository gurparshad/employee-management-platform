import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  onLogin() {
    // after user click login button this method runs.
    localStorage.setItem('empUser', 'loggedIn');
    this.router.navigateByUrl('/client');
  }
}

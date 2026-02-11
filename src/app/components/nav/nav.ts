import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(
    private router: Router,
    public auth: Auth,
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login-api']);
  }
}

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],

  template: `
    <h2>Login With API</h2>

    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input
        class="form-control mb-3"
        type="text"
        placeholder="Enter your username"
        formControlName="username"
      />
      <input
        class="form-control mb-3"
        type="password"
        placeholder="Enter your Password"
        formControlName="password"
      />
      <button class="btn btn-primary">Login</button>
    </form>

    @if (error) {
      <div class="text-danger">{{ error }}</div>
    }
  `,
  styleUrl: './login-api.css',
})
export class LoginApi {
  loginForm!: FormGroup;

  error: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    // this.loginForm = this.fb.group({
    //   username: '',
    //   password: '',
    // });
  }
  login() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe({
      next: () => {
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        this.error = err.error.message;
      },
    });
  }
}

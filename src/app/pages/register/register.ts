import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formRegister!: FormGroup;

  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('')]),
      password: new FormControl('', []),
    });
  }

  onSubmit() {
    console.log(this.formRegister.value);
  }
}

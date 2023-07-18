import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder
    ) {

      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        repeatedPassword: ['', Validators.required]
      }, {validator: this.passwordMatchValidator});

  }

  register(): void {
    const { email, password } = this.registerForm.value;

    this.authService.register({ email, password })
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const repeatedPassword = formGroup.get('repeatedPassword')?.value;

    if (password !== repeatedPassword) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }
}

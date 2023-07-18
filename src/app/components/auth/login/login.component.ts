import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder
    ) {
    
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });

  }

  login(): void {
    this.authService.login(this.loginForm.value)
    .then(response => {
      this.router.navigate(['']);
    })
    .catch(error => console.log(error));
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle()
    .then(response => {
      this.router.navigate(['']);
    })
    .catch(error => console.log(error));
  }
}
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  // Create & Import AuthService
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // Check if user is already Logged In
    // If they are Logged In -> Redirect to ADMIN PAGE
  }

  onSubmit(): void {
    // If Form is Valid
    // Fire login function
    console.log(this.loginForm.value, "[LOGIN USER OBJECT]");

    this.authService.login(this.loginForm.value);
    // If credentials are OK -> Redirect to ADMIN PAGE
    // Else Show Alert ERROR
  }

}

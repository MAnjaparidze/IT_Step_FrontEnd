import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { IResult } from "../../interfaces/IResult";

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

  async onSubmit(): Promise<void> {
    let result: IResult = await this.authService.login(this.loginForm.value);

    console.log(result, '[LOGIN RESULT]');

    alert(result.message);
    if(result.status === 200) {
      this.router.navigate(["/admin"]);
    }
  }

}

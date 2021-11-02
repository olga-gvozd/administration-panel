import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup = new FormGroup({});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.authForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  signIn(): void {
    const loginData = this.authForm.value;
    this.authService.signIn(loginData);
  }

}

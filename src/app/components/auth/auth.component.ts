import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILoginToken } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { PersistService } from 'src/app/services/persist.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly persistService: PersistService
  ) {}

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
    const { username, password } = this.authForm.value;
    this.authService.signIn({ username, password })
      .pipe(
        tap((response: ILoginToken | HttpErrorResponse) => {
          if (response instanceof HttpErrorResponse) {
            return console.log((response as HttpErrorResponse).error.message)
          }
          this.persistService.setToken((response as ILoginToken).token);
          this.authService.setLoginStatus(true);
          this.router.navigate(['about']);
        })
      )
      .subscribe();
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginPageValidatorsService } from 'src/app/auth/services/login-page-validators.service';
import { GetInputService } from 'src/app/core/services/get-input.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginPageValidatorsService],
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validators.lettersAndNumbersValidator,
      this.validators.uppercaseAndLowercaseValidator,
      this.validators.specialCharacterValidator,
    ]),
  });

  constructor(
    private getInputService: GetInputService,
    private router: Router,
    private validators: LoginPageValidatorsService,
  ) {}

  public getInput(name: string): AbstractControl {
    return this.getInputService.getInput(this.loginForm, name);
  }

  public getError(name: string): ValidationErrors | null {
    return this.getInputService.getError(this.loginForm, name);
  }

  public login(): void {
    this.router.navigate(['user/admin']);
  }
}

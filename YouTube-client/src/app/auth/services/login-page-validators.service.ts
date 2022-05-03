import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidatorInterface } from 'src/app/shared/models/validator.model';

@Injectable()
export class LoginPageValidatorsService {
  public lettersAndNumbersValidator(control: FormControl): ValidatorInterface | null {
    if (/[a-zA-z]/.test(control.value) && /[0-9]/.test(control.value)) {
      return null;
    }
    return { lettersAndNumbers: true };
  }

  public uppercaseAndLowercaseValidator(control: FormControl): ValidatorInterface | null {
    if (/[a-z]/.test(control.value) && /[A-Z]/.test(control.value)) {
      return null;
    }
    return { uppercaseAndLowercase: true };
  }

  public specialCharacterValidator(control: FormControl): ValidatorInterface | null {
    if (/[\!@#$%^&*()\[\]{}<>,.:;\-_+=]/.test(control.value)) {
      return null;
    }
    return { specialCharacter: true };
  }
}

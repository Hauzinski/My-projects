import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable()
export class GetInputService {
  public getInput(form: FormGroup, name: string): AbstractControl {
    return form.controls[`${name}`];
  }

  public getError(form: FormGroup, name: string): ValidationErrors | null {
    return this.getInput(form, name).errors;
  }
}

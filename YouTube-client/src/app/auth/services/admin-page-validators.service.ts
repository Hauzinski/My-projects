import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidatorInterface } from 'src/app/shared/models/validator.model';

@Injectable()
export class AdminPageValidatorsService {
  public imgUrlValidator(control: FormControl): ValidatorInterface | null {
    if (control.value.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim)) {
      return null;
    }
    return { imgUrlValidator: true };
  }

  public videoUrlValidator(control: FormControl): ValidatorInterface | null {
    if (control.value.match(/^http[^\?]*.(mpg|mov|mod|vob|wmv|avi|mkv|m4v|mp4)(\?(.*))?$/gim)) {
      return null;
    }
    return { videoUrlValidator: true };
  }

  public dateValidator(control: FormControl): ValidatorInterface | null {
    const dateNow = Date.now();
    const enteredDate = new Date(control.value).getTime();
    if (enteredDate >= dateNow) {
      return null;
    }
    return { dateValidator: true };
  }
}

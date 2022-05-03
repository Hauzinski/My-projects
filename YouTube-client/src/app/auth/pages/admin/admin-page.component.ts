import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { AdminPageValidatorsService } from 'src/app/auth/services/admin-page-validators.service';
import { GetInputService } from 'src/app/core/services/get-input.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  providers: [AdminPageValidatorsService],
})
export class AdminPageComponent {
  adminForm: FormGroup = new FormGroup({
    videoTitle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    videoDiscription: new FormControl('', [Validators.maxLength(255)]),
    videoImg: new FormControl('', [Validators.required, this.validators.imgUrlValidator]),
    videoLink: new FormControl('', [Validators.required, this.validators.videoUrlValidator]),
    videoCreationDate: new FormControl('', [Validators.required, this.validators.dateValidator]),
  });

  constructor(private getInputService: GetInputService, private validators: AdminPageValidatorsService) {}

  public getInput(name: string): AbstractControl {
    return this.getInputService.getInput(this.adminForm, name);
  }

  public getError(name: string): ValidationErrors | null {
    return this.getInputService.getError(this.adminForm, name);
  }

  public createVideo(): void {
    console.log(this.adminForm);
  }
}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;

  constructor() { }

  isFormUntouched(): boolean {
    return this.form.pristine;
  }

  getFormControlValue(controlName: string) {
    const control = this.form.get(controlName);

    return control.value || '';
  }

  validateFormControl(controlName: string) {
    const control = this.form.get(controlName);
    return control.invalid && control.touched;
  }

  isFormEmpty(): Boolean {
    let result = true;
    Object.keys(this.form.controls).forEach(key => {
      if (this.form.get(key).value !== undefined && !this.form.get(key).errors) {
        result = false;
      }
    });
    return result;
  }

}

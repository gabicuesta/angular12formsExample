import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  user: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.user = this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]],
      email: ['', [
        this.validateEmail,
      ]]
    });
  }

  ngOnInit(): void {
    
  }

  validateEmail(): {[key: string]: any} | null  {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value.length > 6) {
        return { 'emailInvalid': true };
      }
      return null;
    }
  }

}

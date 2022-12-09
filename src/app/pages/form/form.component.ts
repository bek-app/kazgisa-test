import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([]?\w+)*(\.\w{2,3})+$/;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      numeric: new FormControl('', [Validators.required]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.maxLength(255),
      ]),

      gender: new FormControl(true, [Validators.required]),

      file: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const form = localStorage.getItem('form');

    if (form) {
      this.form.patchValue(JSON.parse(form));
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const form = JSON.stringify(this.form.value);
    localStorage.setItem('form', form);
    this.router.navigateByUrl('/user-form');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}

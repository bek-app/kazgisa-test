import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-user-finally',
  templateUrl: './user-finally.component.html',
  styleUrls: ['./user-finally.component.scss'],
})
export class UserFinallyComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([]?\w+)*(\.\w{2,3})+$/;

  @ViewChild('modal') modalRef: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex),
        Validators.maxLength(255),
      ]),
    });
  }

  closeModal() {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');

    if (email) {
      this.form.patchValue(JSON.parse(email));
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const email = JSON.stringify(this.form.value);
    localStorage.setItem('email', email);
    this.show();
  }

  show() {
    const modal = new Modal(this.modalRef.nativeElement);
    modal.show();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, max } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  orgForm: FormGroup;
  submitted = false;
  userStatus = true;
  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      iin: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.maxLength(255)]),
    });

    this.orgForm = this.fb.group({
      orgName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      orgBin: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
      ]),
    });
  }

  ngOnInit(): void {
    const userData = localStorage.getItem('userData');
    const orgData = localStorage.getItem('orgData');

    if (userData) {
      this.userForm.patchValue(JSON.parse(userData));
    }

    if (orgData) {
      this.orgForm.patchValue(JSON.parse(orgData));
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.userStatus) {
      if (this.userForm.invalid) {
        return;
      }
      const user = JSON.stringify(this.userForm.value);
      localStorage.setItem('userData', user);

      this.router.navigateByUrl('/user-documents');
    } else {
      if (this.orgForm.invalid) {
        return;
      }
      const org = JSON.stringify(this.orgForm.value);
      localStorage.setItem('orgData', org);
      this.router.navigateByUrl('/user-documents');
    }
  }

  get userF(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  get orgF(): { [key: string]: AbstractControl } {
    return this.orgForm.controls;
  }

  onKeyPress(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  changeUserStatus = (e: boolean) => {
    this.userStatus = e;
    this.submitted = false;
  };
}

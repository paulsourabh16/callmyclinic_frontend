import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}

  messageAlert(loginForm: FormGroup) {
    console.log(loginForm.value);
  }
}

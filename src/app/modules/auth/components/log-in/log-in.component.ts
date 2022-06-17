import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { ValidationMessageService } from 'src/app/modules/shared/services/validation-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  password!: string;
  hide = true;

  constructor(public validationMsg: ValidationMessageService) {}
  ngOnInit(): void {
    this.password = 'password';

    this.logInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.logInForm.valid) {
      let logInModel: any = {
        email: this.logInForm.value.email,
        password: this.logInForm.value.password,
      };
      console.log(logInModel);
    }
  }
}

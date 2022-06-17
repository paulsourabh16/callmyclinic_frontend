import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  patientRegistration!: FormGroup;

  constructor(private _msgService: DesignUtilityService) {}

  ngOnInit(): void {
    this.patientRegistration = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z -']+"),
      ]),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      gender: new FormControl('Male', Validators.required),
      addressOne: new FormControl('', Validators.required),
      addressTwo: new FormControl('', Validators.required),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    let patientRegistrationModel: any = {
      firstName: this.patientRegistration.value.firstName,
      lastName: this.patientRegistration.value.lastName,
      dob: this.patientRegistration.value.dob,
      gender: this.patientRegistration.value.gender,
      addressOne: this.patientRegistration.value.addressOne,
      addressTwo: this.patientRegistration.value.addressTwo,
      phoneNo: this.patientRegistration.value.phoneNo,
      state: this.patientRegistration.value.state,
      country: this.patientRegistration.value.country,
      email: this.patientRegistration.value.email,
    };
    console.log(patientRegistrationModel);
  }
}

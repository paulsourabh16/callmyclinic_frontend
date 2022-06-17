import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { BookAppoinmentComponent } from './components/book-appoinment/book-appoinment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientComponent,
    PatientRegistrationComponent,
    BookAppoinmentComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PatientModule {}

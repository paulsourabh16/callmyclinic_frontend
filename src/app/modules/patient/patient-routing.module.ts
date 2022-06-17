import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { BookAppoinmentComponent } from './components/book-appoinment/book-appoinment.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'book-appoinment', component: BookAppoinmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}

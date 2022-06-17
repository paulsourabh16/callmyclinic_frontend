import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {

  constructor() { }
  public FIELD_IS_REQUIRED = 'This field is required';
  public ACCEPT_ONLY_NUMBERS = 'This field can accept only numbers';
  public ACCEPT_ONLY_ALPHA_NUMBERS = 'This field can accept only alphanumeric characters';
  public ACCEPT_ONLY_CHAR = 'This field can accept only alphabetical characters';
  public MAX_LENGTH_50 = 'Mustn\'t be more than 50 characters!';
  public MAX_LENGTH_20 = 'Mustn\'t be more than 20 characters!';
  public MAX_LENGTH_100 = 'Mustn\'t be more than 100 characters!';
  public PATTERN_10_DIGIT = "This field must be a 10 digit number";
  public MOBILE_PATTERN = "Phone must be a 10 digit number";
  public EMAIL_PATTERN = "The email address is invalid";
  public PASSWORD_PATTERN = 'Minimum 8 characters, atleast 1 uppercase, 1 lowercase, 1 number and 1 special character';
  public CONFIRM_PASSWORD_MISMATCH = 'Password and Confirm Password should be the same!';
  public EMAIL_EXIST = "This email address is already registered!";
  public EMAIL_NOT_EXIST = "The email address is not Registered Yet !!";
  public MODIFICATION_INSTRUCTION = 'Please accept Modification of Instructions';
}

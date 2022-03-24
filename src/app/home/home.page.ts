import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Become Royalty';
  subtitle = 'Get a bank account in less than 5 minutes';
  buttonTextOne = 'Create Account';
  buttonTextTwo = 'Sign In';
  source = 'assets/images/phone.jpg';
  customForm = true;

  constructor() {}

}

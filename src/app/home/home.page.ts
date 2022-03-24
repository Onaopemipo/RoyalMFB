import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'Do More';
  subtitle = 'Access world class banking experience and financial services with ease FOR FREE';
  buttonText = 'Next';
  source = 'assets/images/welcome.jpg';

  constructor() {}

}

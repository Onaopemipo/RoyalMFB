import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  @Input() caption;
  @Input() subtitle;
  @Input() source;
  @Input() buttonTextOne;
  @Input() buttonTextTwo;
  @Input() buttonActionOne;
  @Input() buttonActionTwo;
  @Input() customForm: boolean;

  constructor() { }

  ngOnInit() {}

}

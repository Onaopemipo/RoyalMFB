import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  @Input() caption;
  @Input() subtitle;
  @Input() source;
  @Input() buttonText;
  @Input() buttonAction;
  constructor() { }

  ngOnInit() {}

}

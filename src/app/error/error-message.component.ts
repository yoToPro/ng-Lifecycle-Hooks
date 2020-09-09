import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template:
  ` <div class="row">
      <div class="col-md-8">
          <p>{{message}}</p>
      </div>
      <div class="col-md-8">
          <h3>Attempts: {{numberOfAttempts}} at {{time}}</h3>
      </div>
    </div> `,
  styles: [``]
})
export class ErrorMessageComponent implements OnInit {

  @Input() message;
  @Input() numberOfAttempts;
  time: any;

  constructor() {
    console.log('I am from ErrorMessageComponent constructor()!!');
  }

  ngOnInit() {
  }

}

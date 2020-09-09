import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template:
  ` <div class="bgcolorgree jumbotron jumbotron-fluid">
      <div class="container row">
        <div class="col-md-8">
          <h1 class="display-4">TO DO LIST</h1>
        </div>
        <div class="col-md-4">
          <p><button class="btn btn-primary"(click)="toggleFooter()">Toggle Footer</button></p>
        </div>
      </div>
    </div> `,
  // styleUrls: ['./header.component.css'],
  styles:
  [`
    .header {
      width: 70 %;
      padding: 3 %;
      background-color: green;
    }

    .bgcolorgree  {
      background-color: yellowgreen;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('I am from HeaderComponent constructor()!!');
  }

  @Output() toggleFooterEvt = new EventEmitter();
  showFooter = true;

  ngOnInit() {
  }

  toggleFooter() {
    this.showFooter = !this.showFooter;
    this.toggleFooterEvt.emit(this.showFooter);
  }

}
